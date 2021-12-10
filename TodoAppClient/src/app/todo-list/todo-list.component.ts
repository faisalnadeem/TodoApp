import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { UserTaskService } from '../shared/services/user-task.service';
import { NgForm } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks: Todo[] = [];
  showValidationErrors: boolean = false;

  constructor(private userTaskService: UserTaskService) {}

  ngOnInit(): void {
    this.userTaskService
      .getAllTasks()
      .subscribe((tasks) => (this.tasks = tasks));
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    if (form.invalid) return (this.showValidationErrors = true);
    else {
      const itemToAdd = new Todo(form.value.todoText);
      this.userTaskService.addTask(itemToAdd).subscribe((result) => {
        if (result) this.tasks.push(itemToAdd);
      });
      form.reset();
      return (this.showValidationErrors = false);
    }
  }

  toggleTaskCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  removeTask(todo: Todo) {
    this.userTaskService.deleteTodo(todo.text).subscribe((result) => {
      if (result) this.tasks.splice(this.tasks.indexOf(todo), 1);
    });
  }
}
