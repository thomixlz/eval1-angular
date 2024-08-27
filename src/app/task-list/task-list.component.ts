import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  newTaskName: string = '';

  constructor(private taskService: TaskService) {}

  get tasks() {
    return this.taskService.getTasks();
  }

  addTask() {
    console.log('Add task clicked');
    if (this.newTaskName.trim()) {
      this.taskService.addTask({ name: this.newTaskName, completed: false });
      this.newTaskName = '';
    }
  }

  deleteTask(task: { name: string, completed: boolean, isEditing: boolean }) {
    this.taskService.deleteTask(task);
  }

  editTask(task: { name: string, completed: boolean, isEditing: boolean }) {
    task.isEditing = true;
  }

  saveTask(task: { name: string, completed: boolean, isEditing: boolean }) {
    task.isEditing = false;
  }
}
