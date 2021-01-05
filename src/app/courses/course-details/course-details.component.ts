import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/common/models/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent{

  selectedCourse: Course
  
  @Output() save = new EventEmitter()
  @Input() set course(value: Course) {
    if(value) {
      this.selectedCourse = {...value} //Object.assign({}, value)
    }
  }

  formatLabel(value: number){
    return value + '%'
  }

}
