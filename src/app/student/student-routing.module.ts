import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLayoutComponent } from '../layout/student-layout/student-layout.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { ListStudentComponent } from './list-student/list-student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentLayoutComponent,
    children: [
      {
        path: 'student',
        component: ListStudentComponent
      },
      {
        path:'student/:id',
        component: DetailStudentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
