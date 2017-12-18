import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoListServiceService } from './todo-list-service.service';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule
  ],
  providers: [TodoListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
