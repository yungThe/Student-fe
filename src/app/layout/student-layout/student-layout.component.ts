import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.scss']
})
export class StudentLayoutComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  goToList(){
    this.router.navigate(['/student']);
  }
}
