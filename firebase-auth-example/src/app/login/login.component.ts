import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.initAuthListener();
  }

  login() {
    this.authService.loginGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
