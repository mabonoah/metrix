import { AuthService } from './../services/auth.service';
import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {

  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticaticated(): boolean {
    const isLoggedIn: boolean = this.authService.isLoggedIn();
    if (!isLoggedIn) this.router.navigate(['/login']);
    return isLoggedIn;
  }

}

export const canActivate: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthenticationGuard).isAuthenticaticated();
  };

