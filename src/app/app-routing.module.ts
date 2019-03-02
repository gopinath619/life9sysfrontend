import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'signup',
    component:SignupComponent,
  },
  {
    path: 'studentDashboard',
    loadChildren: './student/student.module#StudentModule'
  },
  {
    path: 'teacherDashboard',
    loadChildren: './teacher/teacher.module#TeacherModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
