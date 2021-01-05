import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  themeColor = "blue"
  currentCourse: {title: string}

  constructor(private lessonsService: LessonsService) { }

  courseLessons: {title: string}[] = this.lessonsService.all()

  updateColor(){
    this.themeColor = 'darkgreen'
  }

  selectCourse(course){
    this.currentCourse = course
  }

  ngOnInit(): void {
  }

}
