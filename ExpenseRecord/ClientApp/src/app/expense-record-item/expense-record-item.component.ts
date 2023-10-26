import { Component, Input, OnInit } from '@angular/core';
import { ExpenseRecordItemDto, ExpenseRecordService } from '../expense-record.service';

@Component({
  selector: 'app-expense-record-item',
  templateUrl: './expense-record-item.component.html',
  styleUrls: ['./expense-record-item.component.css']
})
export class ExpenseRecordItemComponent implements OnInit {

  @Input()
  record: ExpenseRecordItemDto = {id:"", description: '', type: "", amount: 0, expenseDate:""};

  constructor(private expenseRecordService: ExpenseRecordService) { }

  ngOnInit(): void {
  }

  deleteItem(){
    alert("Are you sure?")
    this.expenseRecordService.deleteExpenseRecord(this.record.id).subscribe();
    
  }

}
