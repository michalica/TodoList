import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoListServiceService {

  todoItems:TodoItem[] =[];
  constructor() {
    console.log('service connected');
  }
  getTodoItems() {
    return this.todoItems;
  }
  setTodoItems(item) {
    let itemOfTodo:TodoItem = {
      checked: false,
      name: item
    };
    this.todoItems.unshift(itemOfTodo);
  }
}
