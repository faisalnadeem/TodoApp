import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class UserTaskService {
  tasks: Todo[] = [
    new Todo(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    ),
    new Todo(
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    ),
    new Todo(
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      true
    ),
    new Todo(
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    ),
  ];

  constructor() {}

  getAllTasks() {
    return this.tasks;
  }

  addTask(todoItem: Todo) {
    this.tasks.push(todoItem);
  }

  deleteTodo(todoItem: Todo) {
    this.tasks.splice(this.tasks.indexOf(todoItem), 1);
  }
}
