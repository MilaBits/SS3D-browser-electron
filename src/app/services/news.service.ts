import {Injectable} from '@angular/core';
import {GameServerData} from "../../models/GameServerData";
import {Observable, of} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "./message.service";
import {catchError} from "rxjs/operators";
import {News} from "../../models/News";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = 'http://localhost:5000/news';

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.getNews().subscribe(data => this.news = data);
    console.log(this.news);
  }

  news: News[];
  errorMessage: string;

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl)
      .pipe(catchError(this.handleError<News[]>('getNews', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${operation} failed: ${error.message}`);

      if (error.constructor == HttpErrorResponse) {
        if (error.status == 0){
          this.errorMessage = "Unable to fetch news. No Response from server";
        }
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
