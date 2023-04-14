import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private baseUrl = 'http://194.163.169.47:5000';

  constructor(private http: HttpClient) { }

  post(url: string, body: any): Observable<any> {
    return this.http.post(this.baseUrl + url, body);
  }

}
