import { Component, Input, OnInit } from '@angular/core';
import { News } from '../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() news: News;

  comments = [];

  showDetail = false;

  constructor() {}

  ngOnInit(): void {}

  receiveNewResults(newResults): void {
    this.comments = newResults;
  }
}
