import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss']
})
export class DetailStudentComponent implements OnInit {
  id = '';
  student : any;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private studentService : StudentService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getById(this.id);
  }

  getById(id:string){
    this.studentService.getById(id).subscribe(res=>{
      this.student = res;
      this.student.fullName = this.student.lastname + ' ' + this.student.firstName;
    })
  }

}
