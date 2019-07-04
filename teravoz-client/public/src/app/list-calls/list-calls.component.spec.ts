import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCallsComponent } from './list-calls.component';

describe('ListCallsComponent', () => {
  let component: ListCallsComponent;
  let fixture: ComponentFixture<ListCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
