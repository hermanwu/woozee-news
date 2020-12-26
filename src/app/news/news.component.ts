import { Component, Input, OnInit } from '@angular/core';
import { News } from '../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() news: News;

  keyPoints = [];

  showDetail = false;

  constructor() {}

  ngOnInit(): void {}

  onNextThought(): void {
    this.keyPoints = this.news.keyPoints.slice(0, this.keyPoints.length + 1);
  }
}
