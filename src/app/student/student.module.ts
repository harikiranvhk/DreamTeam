import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentResultsComponent } from './student-results/student-results.component';


@NgModule({
  declarations: [StudentComponent, StudentHeaderComponent, StudentResultsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
