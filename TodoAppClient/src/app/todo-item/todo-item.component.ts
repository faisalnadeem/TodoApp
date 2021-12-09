import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo = new Todo('');
  @Output() taskClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteTaskClicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onTaskClicked(): void {
    this.taskClicked.emit();
  }

  onDeleteTaskClicked() {
    this.deleteTaskClicked.emit();
  }
}
