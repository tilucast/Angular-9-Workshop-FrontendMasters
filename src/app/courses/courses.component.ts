import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../common/services/courses.service';
import {Course} from '../common/models/Course'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  course: Course = {
    id: null,
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false
  }

  courses: Course[]

  ngOnInit(): void {
    this.reloadCourses()
  } 

  selectCourse(course){
    return this.course = course
  }

  save(form){
    if(this.course.id){
      return this.coursesService.update(form.value, this.course, ).subscribe(() => {
        this.reloadCourses()
        
      })

    } else {
      return this.coursesService.create(form.value).subscribe(() => this.reloadCourses())
    }

  }

  deleteCourse(course){
    this.coursesService.delete(course).subscribe(() => {
      this.reloadCourses()

    })
  }

  reloadCourses(){
    return this.coursesService.all().subscribe((courses: Course[]) => {
      this.selectCourse({})
      return this.courses = courses
    })
  }

}
