import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: false,
  
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTodo: string = '';
  todos: { text: string, completed: boolean }[] = [];

  addTodo(): void {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}

