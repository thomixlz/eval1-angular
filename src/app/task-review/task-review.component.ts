import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-review.component.html',
  styleUrls: ['./task-review.component.scss']
})
export class TaskReviewComponent {

  constructor(private taskService: TaskService) {}

  get tasks() {
    return this.taskService.getTasks();
  }

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  get pendingTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  get completedTasksCount() {
    return this.completedTasks.length;
  }

  get pendingTasksCount() {
    return this.pendingTasks.length;
  }
}
