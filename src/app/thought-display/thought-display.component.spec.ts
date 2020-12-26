import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtDisplayComponent } from './thought-display.component';

describe('ThoughtDisplayComponent', () => {
  let component: ThoughtDisplayComponent;
  let fixture: ComponentFixture<ThoughtDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoughtDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
