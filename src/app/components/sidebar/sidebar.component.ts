import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() username: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  logOut(): void {
    this.loginService.logOut();
  }
}
