import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coursesList = COURSES;
  //Component
  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;
  //By template ref
  @ViewChild('cardRef')
  card2: CourseCardComponent;
  //Get component in html element 
  @ViewChild('cardRef2',{read: ElementRef} )
  card3: ElementRef;
  //Get html element 
  @ViewChild('cardRef3')
  card4: ElementRef;

  onCourseSelected(course: Course){
    console.log(this.card)
    console.log(this.card2)
    console.log(this.card3)
    console.log(this.card4)
  }
}
