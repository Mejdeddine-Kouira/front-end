import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackingStudentComponent } from './components/tracking-student/tracking-student.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GradeComponent } from './components/grade/grade.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingStudentComponent,
    GradeComponent
  ],
  imports: [
    MatPaginatorModule,
    
    MatTableModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
