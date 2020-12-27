import { Component, OnInit } from '@angular/core';
import { blogList } from '../mock-data/blog-list';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  blogs;
  displayBlogs;

  constructor() {}

  ngOnInit(): void {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    this.blogs = blogList;
  }

  receiveNewResults(newResults) {
    console.log(newResults);
    this.displayBlogs = newResults;
  }
}
