import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss']
})
export class DetailStudentComponent implements OnInit {
  id = '';
  student: any;
  formInforStudent: FormGroup;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getById(this.id);
    this.formInforStudent = this.formBuilder.group({
      fullName: new FormControl(''),
      year: new FormControl(''),
      total: new FormControl(''),
      status: new FormControl(null, [Validators.required])
    })
  }
  getById(id: string) {
    this.studentService.getById(id).subscribe(res => {
      this.student = res;
      this.student.fullName = this.student.lastname + ' ' + this.student.firstName;
      this.formInforStudent?.get('fullName')?.patchValue(this.student.fullName);
      this.formInforStudent?.get('year')?.patchValue(this.student.year);
      this.formInforStudent?.get('total')?.patchValue(this.student.total);
      this.formInforStudent?.get('status')?.patchValue(this.student.status);
    })
  }

  edit() {
    let dataInput = {
      status: this.formInforStudent.get('status').value
    }
    for (const i in this.formInforStudent.controls) {
      this.formInforStudent.controls[i].markAsDirty();
      this.formInforStudent.controls[i].updateValueAndValidity();
    }
    if (this.formInforStudent.valid) {
      this.loading = true;
      this.studentService.editStudent(dataInput, this.id).subscribe(res => {
        Swal.fire({
          title: 'Success',
          // icon: 'success',
          heightAuto: true,
          timer: 2500,
          padding: '3em',
          color: '#716add',
          background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
          backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
              `
        })
      }, (error) => {
        this.loading = false;
      });
      console.log(this.id);
      console.log(dataInput);
    }
  }

}
