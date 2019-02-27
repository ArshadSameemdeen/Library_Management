import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDvdsComponent } from './view-dvds.component';

describe('ViewDvdsComponent', () => {
  let component: ViewDvdsComponent;
  let fixture: ComponentFixture<ViewDvdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDvdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDvdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
