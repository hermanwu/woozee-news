import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { logoMap } from '../mock-data/logo-map';
import { Thought } from '../models/thought.model';

@Component({
  selector: 'app-thought-display',
  templateUrl: './thought-display.component.html',
  styleUrls: ['./thought-display.component.scss'],
})
export class ThoughtDisplayComponent implements OnInit, OnChanges {
  @Input() thought: Thought;

  comments = [];

  isExpanded = false;
  stockLogoLink: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.stockLogoLink = logoMap[this.thought.stock];
  }

  onNextThought() {
    this.comments = this.thought.comments.slice(0, this.comments.length + 1);
  }
}