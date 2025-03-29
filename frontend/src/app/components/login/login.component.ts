import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = { email: '', password: ''};

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.user).subscribe(response => {
      alert('Login successful');
      this.authService.saveToken(response.token);
    });
  }
}
