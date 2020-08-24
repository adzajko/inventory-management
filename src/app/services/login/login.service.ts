import { Injectable } from '@angular/core';
import { LoginForm } from '../../models/LoginForm.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) {}

  logIn(credentials: LoginForm): void {
    window.sessionStorage.setItem('username', credentials.username);
    window.sessionStorage.setItem('password', credentials.password);
  }

  logOut(): void {
    this.router.navigateByUrl('/login');
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
