import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { TopicsComponent } from './topics/topics.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [TeacherDashboardComponent, CoursesComponent, ChaptersComponent, TopicsComponent, QuizComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
  ]
})
export class TeacherModule { }
