import { Component, OnInit } from '@angular/core';
import { blog1 } from '../mock-data/blog-list';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  blog: Blog;

  constructor() {}

  ngOnInit(): void {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    this.blog = blog1;
  }
}
