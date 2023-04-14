import { SnackBarService } from './../../../shared/services/snack-bar.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../interfaces/login.interface';
import { HttpResponse } from '../../interfaces/http-response.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.isLoading = true;
    this.authService.login(this.loginFormData)
      .subscribe((res: HttpResponse) => {
        this.isLoading = false;
        if (res.code === 1) this.successHandler(res.data);
        else this.errorHandler(res.message);
      });
  }

  private get loginFormData(): FormData {
    const formData = new FormData();
    const loginData: Login = this.form.value;
    formData.append('email', loginData.email);
    formData.append('password', loginData.password);
    return formData;
  }

  private successHandler(data: any) {
    console.log('success: ', data);
  }

  private errorHandler(message: string) {
    this.snackBarService.openSnackBar(message, 'Sign in');
  }

}
