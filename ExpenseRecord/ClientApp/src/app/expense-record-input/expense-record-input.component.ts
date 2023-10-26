import { Component, OnInit } from '@angular/core';
import { ExpenseRecordItemCreateRequest, ExpenseRecordItemDto, ExpenseRecordService } from '../expense-record.service';


@Component({
  selector: 'app-expense-record-input',
  templateUrl: './expense-record-input.component.html',
  styleUrls: ['./expense-record-input.component.css']
})
export class ExpenseRecordInputComponent implements OnInit {

  record: ExpenseRecordItemCreateRequest = {description: '', type: "", amount: 0, expenseDate:""};
  constructor(private expenseRecordService: ExpenseRecordService) { }

  ngOnInit(): void {
  }

  createRecord(){
    console.log("create")
    //this.loadData();
  }

  saveItem(){
    this.expenseRecordService.addExpenseRecord(this.record).subscribe();
  }

  // loadData() {
  //   this.expenseRecordService.getAllExpenseRecord().subscribe(
  //     res => {
  //       this.recordList = res;
  //     }
  //   );
  // }

}
