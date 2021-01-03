import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Thought } from '../models/thought.model';

@Component({
  selector: 'app-thought-display',
  templateUrl: './thought-display.component.html',
  styleUrls: ['./thought-display.component.scss'],
})
export class ThoughtDisplayComponent implements OnInit, OnChanges {
  @Input() thought: Thought;

  comments = [];
  showThoughts = false;

  isExpanded = false;
  coverImageLink: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.coverImageLink = this.thought.coverImageLink;
  }

  onNextThought() {
    this.comments = this.thought.comments.slice(0, this.comments.length + 1);
  }

  receiveNewResults(newResults): void {
    this.comments = newResults;
  }
}
