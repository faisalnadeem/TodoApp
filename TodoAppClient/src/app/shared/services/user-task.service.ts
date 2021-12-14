import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class UserTaskService {
  tasks: Todo[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  todoBaseUrl = 'https://kay-emm.azurewebsites.net/';
  //todoURl.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  getAllTasks(): Observable<Todo[]> {
    const getTasksUrl = `${this.todoBaseUrl}/todotasks`;
    return this.http.get<Todo[]>(getTasksUrl, this.httpOptions);
  }

  log(message: string) {
    console.log(message);
  }

  addTask(todoItem: Todo): Observable<Todo> {
    const addTasksUrl = `${this.todoBaseUrl}/todotasks`;
    return this.http.post<Todo>(addTasksUrl, {
      text: todoItem.text,
      completed: todoItem.completed,
    });
  }

  updateTask(index: number, updatedTodo: Todo) {
    this.tasks[index] = updatedTodo;
  }

  deleteTodo(text: string): Observable<any> {
    const addTasksUrl = `${this.todoBaseUrl}/todotasks?text=${text}`;
    console.log(addTasksUrl);
    return this.http.delete<string>(addTasksUrl);
  }
}
