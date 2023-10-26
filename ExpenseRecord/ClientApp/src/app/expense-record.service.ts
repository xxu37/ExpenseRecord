import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

export interface ExpenseRecordItemDto{
  id: string,
  description: string,
  type: string,
  amount: number,
  expenseDate: string
}

export interface ExpenseRecordItemCreateRequest{
  description: string,
  type: string,
  amount: number,
  expenseDate: string
}

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseRecordService {
  private webapi = 'https://localhost:7081/api/v1/Expense';

  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  getAllExpenseRecord(){
    return this.http.get<ExpenseRecordItemDto[]>(this.webapi);
  }

  addExpenseRecord(newRecord: ExpenseRecordItemCreateRequest){
    
    // const expenseRecordItemDto: ExpenseRecordItemDto = {
    //   description: newRecord.description,
    //   type: newRecord.type,
    //   amount: newRecord.amount,
    //   date: newRecord.date,
    // }
    //console.log(todoItemDto);
    console.log(newRecord)
    return this.http.post<ExpenseRecordItemDto>(this.webapi, newRecord, httpOptions)
  }

  deleteExpenseRecord(id: string){
    const url = `${this.webapi}/${id}`
    return this.http.delete(url, httpOptions) 
  }


}
