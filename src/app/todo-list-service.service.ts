import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoListServiceService {

  todoItems:TodoItem[] =[];
  constructor() {
  }

  getTodoItems() {
    return this.todoItems;
  }
  setTodoItems(item) {
    if(item === ''){
      return false;
    }
    let itemOfTodo:TodoItem = {
      checked: false,
      name: item
    };
    this.todoItems.unshift(itemOfTodo);
  }
  deleteTodo(index) {
    this.todoItems.splice(index, 1);
  }
  changeStateOfTodo(index, boolean) {
    this.todoItems[index].checked = boolean;
  }
}
