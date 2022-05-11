import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { ListStudentComponent } from './list-student/list-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    ListStudentComponent,
    DetailStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NzTableModule,
    NzDividerModule,
    DragDropModule,
    ReactiveFormsModule,
    NzButtonModule,
  ]
})
export class StudentModule { }
