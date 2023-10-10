import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;


  constructor(){
  }

  ngAfterViewInit() {

    this.cards.changes.subscribe(
      cards => console.log(cards)
    );
  }

  onCoursesEdited(){
    this.coursesList.push(
      {
        id: 11,
        description: "Angular 2",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    );
  }

  onCourseSelected(course: Course){
    console.log(course)
  }
}
