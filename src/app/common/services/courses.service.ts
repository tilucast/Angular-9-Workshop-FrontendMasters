import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: false
    },
    {
      id: 2,
      title: 'Javascript the Really HARD parts',
      description: 'Nothing to describe about that one.',
      percentComplete: 50,
      favorite: false
    },
    {
      id: 3,
      title: 'Rust for Js developers',
      description: 'Rust is hard',
      percentComplete: 20,
      favorite: true
    }
  ];

  all(){
    return this.courses
  }

  find(id){

  }

  delete(course){
    for(let item in this.courses){
      if(this.courses[item].id === course.id) return this.courses.splice(Number(item), 1)
    }
  }

  save(form){
    console.log(form.value);
    
  }
}
