import {Component, Input, OnInit} from '@angular/core';
import {GameServerData} from "../../../models/GameServerData";

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

  @Input() gameServerData: GameServerData;

  constructor() { }

  ngOnInit(): void {
  }

}
