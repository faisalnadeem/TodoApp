import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { UserTaskService } from '../shared/services/user-task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
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

  constructor(private userTaskService: UserTaskService) {}

  ngOnInit(): void {
    this.tasks = this.userTaskService
      .getAllTasks()
      .map((obj) => new Todo(obj.text, obj.completed));
  }
}
