import {Component, OnInit} from '@angular/core';
import {GameServerData} from "../../../models/GameServerData";
import {ServersService} from "../../services/servers.service";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-server-browser',
  templateUrl: './server-browser.component.html',
  styleUrls: ['./server-browser.component.css']
})
export class ServerBrowserComponent implements OnInit {

  servers: GameServerData[];
  selectedServer: GameServerData;

  onSelect(gameServerData: GameServerData): void {
    this.selectedServer = gameServerData;
  }

  constructor(public serversService: ServersService, private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

}
