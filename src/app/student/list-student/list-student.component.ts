import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { saveAs } from 'file-saver';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  urlExport = '';
  listStudent: any = [];
  paramQuery: any = {};
  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudent().subscribe(res => {
      this.listStudent = res;
      this.listStudent.map((student: { fullName: string; lastname: string; firstName: string; }) => {
        student.fullName = student.lastname + ' ' + student.firstName;
        return student;
      })
    })
  }

  goToDetail(id: any) {
    this.router.navigate(['/student/detail', { id }]);
  }

  exportCsv(id: any) {
    this.urlExport = this.studentService.getCsv(id);
    this.studentService.downloadFile(this.urlExport, this.paramQuery).subscribe((response: any) => {
      let blob: any = new Blob([response], { type: 'text/csv;charset=utf-8' });
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.setAttribute('download', 'student.csv');
      document.body.appendChild(downloadLink);
      downloadLink.click();
    })
  }

  drop(event: CdkDragDrop<string[]>): void {
    let tmpListData = this.listStudent;
    moveItemInArray(tmpListData, event.previousIndex, event.currentIndex);
    tmpListData = tmpListData.map((item: any, index: number) => {
      return {
        ...item,
        student: index + 1
      }
    })
    this.listStudent = [...tmpListData];
  }
}
