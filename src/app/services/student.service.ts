import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl: string = environment.apiUrl;
  urlExport = '';
  constructor(
    private httpClient: HttpClient
  ) { }

  getStudent() {
    return this.httpClient.get(this.apiUrl + '/student');
  }

  getById(id: string) {
    return this.httpClient.get(this.apiUrl + '/student/' + id);
  }
  downloadFile(url: string, params: {}): any {
    return this.httpClient.get(url, { responseType: 'blob', params: params });
  }

  getCsv(id: string) {
    return this.apiUrl + `/student/invoice/` + id;
  }
}
