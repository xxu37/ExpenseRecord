import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { ExpenseRecordInputComponent } from './expense-record-input/expense-record-input.component';
import { ExpenseRecordListComponent } from './expense-record-list/expense-record-list.component';
import { ExpenseRecordItemComponent } from './expense-record-item/expense-record-item.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        ExpenseRecordInputComponent,
        ExpenseRecordListComponent,
        ExpenseRecordItemComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
