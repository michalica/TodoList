import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoItem } from './todo-item';

import { TodoListServiceService } from '../todo-list-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems:TodoItem[] =[];
  constructor(private todoListService:TodoListServiceService) {
    this.todoItems = todoListService.getTodoItems();
  }

  ngOnInit() {
  }

}
