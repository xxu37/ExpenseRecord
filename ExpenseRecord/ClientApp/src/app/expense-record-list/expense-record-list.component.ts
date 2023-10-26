import { Component, OnInit } from '@angular/core';
import { ExpenseRecordItemDto, ExpenseRecordService } from '../expense-record.service';

@Component({
  selector: 'app-expense-record-list',
  templateUrl: './expense-record-list.component.html',
  styleUrls: ['./expense-record-list.component.css']
})
export class ExpenseRecordListComponent implements OnInit {

  recordList: ExpenseRecordItemDto[] = [];
  constructor(private expenseRecordService: ExpenseRecordService) { }

  ngOnInit(): void {
    this.loadData();
  }

  //refresh after listen the event

  loadData() {
    this.expenseRecordService.getAllExpenseRecord().subscribe(
      res => {
        this.recordList = res.reverse();
      }
    );
  }
}
