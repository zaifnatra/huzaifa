import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import for forms
import { FormsModule } from '@angular/forms'

// defining interface for taks
interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  // adding forms to the imports
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // variable for the text input
  newTask = '';

  // Arrau to hold the lists of tasks
  todos: Todo[] = [
    { task : 'Learn Angular', completed: false},
    { task: 'Play League with Gur', completed: false},
    { task: 'Learn TS', completed: false}
  ];

// function that runs when I click "add" button
  addTodo() {
    if (this.newTask.trim() !== '') {
      this.todos.push({
        task: this.newTask,
        completed: false
      });
      this.newTask = '';
    }
  }
}
