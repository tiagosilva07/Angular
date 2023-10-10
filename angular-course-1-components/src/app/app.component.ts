import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  coursesList = COURSES;
  //Component
  @ViewChild('cardRef')
  card: CourseCardComponent;
  @ViewChild('container')
  containerDid: ElementRef;

  constructor(){
  }

  ngAfterViewInit() {
    console.log("Container Div", this.card)
  }

  onCourseSelected(course: Course){
    console.log(this.card)

  }
}
