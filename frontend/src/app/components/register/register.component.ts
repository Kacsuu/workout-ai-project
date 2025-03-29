import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { name: '', email: '', password: ''};

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user).subscribe(response => {
      alert('Registration successful');
      this.authService.saveToken(response.token);
    });
  }
}
