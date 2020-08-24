import { Injectable } from '@angular/core';
import { LoginForm } from '../../models/LoginForm.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private toastr: ToastrService) {}

  logIn(credentials: LoginForm): void {
    window.sessionStorage.setItem('username', credentials.username);
    window.sessionStorage.setItem('password', credentials.password);

    this.toastr.success(
      `Nice to see you again, ${credentials.username}`,
      'Welcome back!'
    );
  }

  logOut(): void {
    this.router.navigateByUrl('/login');
    this.toastr.success('You have been logged out.', 'Goodbye!');
    window.sessionStorage.clear();
  }

  getCurrentUser(): string | null {
    if (window.sessionStorage.getItem('username')) {
      return window.sessionStorage.getItem('username');
    } else {
      return null;
    }
  }
}
