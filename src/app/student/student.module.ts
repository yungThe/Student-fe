import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { ListStudentComponent } from './list-student/list-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    ListStudentComponent,
    DetailStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class StudentModule { }
