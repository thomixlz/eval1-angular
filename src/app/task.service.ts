import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Array<{ name: string, completed: boolean, isEditing: boolean }> = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: { name: string, completed: boolean }) {
    this.tasks.push({ ...task, isEditing: false });
  }

  deleteTask(taskToDelete: { name: string, completed: boolean }) {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
  }
}
