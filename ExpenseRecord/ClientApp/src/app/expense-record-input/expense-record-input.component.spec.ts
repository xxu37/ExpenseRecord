import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRecordInputComponent } from './expense-record-input.component';

describe('ExpenseRecordInputComponent', () => {
  let component: ExpenseRecordInputComponent;
  let fixture: ComponentFixture<ExpenseRecordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseRecordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseRecordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
