import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudentLayoutComponent } from './layout/student-layout/student-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StudentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }