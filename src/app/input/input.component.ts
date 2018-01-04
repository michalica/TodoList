import { Component, OnInit } from '@angular/core';
import { TodoListServiceService } from '../todo-list-service.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  formHolder = "";
  constructor(private todoListService:TodoListServiceService) {
    todoListService.setTodoItems('new Todo');
  }

  ngOnInit() {
  }

  addTodo() {
    this.todoListService.setTodoItems(this.formHolder);
    this.formHolder = "";
    return false;
  }
}
