import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../services/message.service";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public newsService: NewsService, private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

}
