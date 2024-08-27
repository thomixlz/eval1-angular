import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReviewComponent } from './task-review.component';

describe('TaskReviewComponent', () => {
  let component: TaskReviewComponent;
  let fixture: ComponentFixture<TaskReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
