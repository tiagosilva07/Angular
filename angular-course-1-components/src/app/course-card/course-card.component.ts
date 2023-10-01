import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})

export class CourseCardComponent implements OnInit {

  @Input({ required: true })
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {

  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course)
  }

}
