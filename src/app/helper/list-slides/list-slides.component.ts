import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-list-slides',
  templateUrl: './list-slides.component.html',
  styleUrls: ['./list-slides.component.scss'],
})
export class ListSlidesComponent implements OnInit, OnChanges {
  @Input() items: any[];
  @Input() buttonText: string = 'Next';

  @Output() displayItemsResult = new EventEmitter<any[]>();

  displayItemsCount = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items?.currentValue?.length > 0) {
      this.displayItemsCount = 1;
      this.displayItemsResult.emit(changes.items.currentValue.slice(0, 1));
    }
  }

  onClickDisplayNext() {
    this.displayItemsCount += 1;
    this.displayItemsResult.emit(this.items?.slice(0, this.displayItemsCount));
  }
}
