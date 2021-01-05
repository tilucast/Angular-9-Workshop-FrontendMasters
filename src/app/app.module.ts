import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './common/services/courses.service';
import { LessonsService } from './common/services/lessons.service';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { LessonsListComponent } from './home/lessons-list/lessons-list.component';
import { LessonDetailsComponent } from './home/lesson-details/lesson-details.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    LessonsListComponent,
    LessonDetailsComponent
  ],
  providers: [CoursesService, LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
