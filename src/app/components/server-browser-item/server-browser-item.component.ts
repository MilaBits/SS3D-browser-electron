import {Component, Input, OnInit} from '@angular/core';
import {GameServerData} from '../../../models/GameServerData'

@Component({
  selector: 'app-server-browser-item',
  templateUrl: './server-browser-item.component.html',
  styleUrls: ['./server-browser-item.component.scss']
})
export class ServerBrowserItemComponent implements OnInit {

  @Input() gameServerData: GameServerData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
