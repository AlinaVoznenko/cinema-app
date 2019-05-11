import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertHallComponent } from './concert-hall.component';

describe('ConcertHallComponent', () => {
  let component: ConcertHallComponent;
  let fixture: ComponentFixture<ConcertHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
