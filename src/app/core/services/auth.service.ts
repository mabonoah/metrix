import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = '/login.php';
  private accessToken: string;

  constructor(private apiService: APIService, private router: Router) { }

  login(body: FormData): Observable<any> {
    return this.apiService.post(this.url, body);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  logout() {
    this.setAccessToken('');
    this.router.navigate(['/login']);
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  }

  getAccessToken(): string | null {
    return this.accessToken ? this.accessToken : localStorage.getItem('accessToken');;
  }

}
