import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingStudentComponent } from './components/tracking-student/tracking-student.component';
import { GradeComponent } from './components/grade/grade.component';
const routes: Routes = [
  { path: 'tracking', component: TrackingStudentComponent },
  { path: 'grade/:student', component: GradeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
