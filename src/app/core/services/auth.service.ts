import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = '/login.php';

  constructor(private apiService: APIService) { }

  login(body: FormData): Observable<any> {
    return this.apiService.post(this.url, body);
  }

}
