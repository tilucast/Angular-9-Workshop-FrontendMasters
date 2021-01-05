import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  baseURL = 'http://localhost:3000/courses'

  all(){
    return this.httpClient.get(this.baseURL)
  }

  find(id){
    return this.httpClient.get(`${this.baseURL}/${id}`)
  }

  delete(course){
    return this.httpClient.delete(`${this.baseURL}/${course.id}`, course.id)
  }

  create(data){
    return this.httpClient.post(this.baseURL, data)
  }

  update(data, course){
    return this.httpClient.put(`${this.baseURL}/${course.id}`, data)
  }
}
