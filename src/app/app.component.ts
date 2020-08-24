import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public activeUser: string | null;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  checkIfLoggedIn(): boolean {
    if (this.loginService.getCurrentUser() !== null) {
      this.activeUser = this.loginService.getCurrentUser();
      return true;
    } else {
      return false;
    }
  }
}
