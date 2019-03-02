import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { TopicsComponent } from './topics/topics.component';
import { QuizComponent } from './quiz/quiz.component';
const routes: Routes = [

{
    path: '',
  
    children: [
      {
        path: 'addcourses',
        component: CoursesComponent
      },
      {
        path: 'addchapters',
        component: ChaptersComponent
      },
      {
        path: 'addtopics',
        component: TopicsComponent
      },
      {
        path: 'Quizes',
        component: QuizComponent
      },
    ],
      component: TeacherDashboardComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
