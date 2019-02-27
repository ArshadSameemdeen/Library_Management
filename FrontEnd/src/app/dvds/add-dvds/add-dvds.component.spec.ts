import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDvdsComponent } from './add-dvds.component';

describe('AddDvdsComponent', () => {
  let component: AddDvdsComponent;
  let fixture: ComponentFixture<AddDvdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDvdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDvdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
