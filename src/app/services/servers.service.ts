import {Injectable} from '@angular/core';
import {GameServerData} from "../../models/GameServerData";
import {Observable, of} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "./message.service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  //http://ss3dsb.gateway.kn01.fhict.nl/serverlist
  //http://localhost:5000/serverlist
  private serversUrl = 'http://ss3dsb.gateway.kn01.fhict.nl/serverlist';

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.getServers().subscribe(data => this.servers = data);
    console.log(this.servers);
  }

  servers: GameServerData[];
  errorMessage: string;

  getServers(): Observable<GameServerData[]> {
    return this.http.get<GameServerData[]>(this.serversUrl)
      .pipe(catchError(this.handleError<GameServerData[]>('getServers', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${operation} failed: ${error.message}`);

      if (error.constructor == HttpErrorResponse) {
        if (error.status == 0){
          this.errorMessage = "Unable to fetch servers. No Response from server";
        }
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
