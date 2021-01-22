import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingStudentComponent } from './components/tracking-student/tracking-student.component';
import { GradeComponent } from './components/grade/grade.component';

 
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'navbar-admin', component:NavbarAdminComponent},
  { path:'navbar-student', component:NavbarStudentComponent},
  { path:'navbar-teacher', component:NavbarTeacherComponent},
  { path: 'tracking', component: TrackingStudentComponent },
  { path: 'grade/:student', component: GradeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
