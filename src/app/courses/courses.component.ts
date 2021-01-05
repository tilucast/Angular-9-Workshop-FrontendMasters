import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../common/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  course: {
    id: number,
    title: string,
    description: string,
    percentComplete: number,
    favorite: boolean
  }

  constructor(private coursesService: CoursesService) { }

  courses = this.coursesService.all()

  selectCourse(course){
    return this.course = course
  }

  save(form){
    this.coursesService.save(form)
    
  }

  deleteCourse(course){
    this.coursesService.delete(course)

    if(course === this.course) this.selectCourse({})
  }

  formatLabel(value: number){
    return value + '%'
  }

  ngOnInit(): void {
  }

}
