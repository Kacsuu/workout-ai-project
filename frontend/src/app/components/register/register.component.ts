import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, RouterOutlet]
})
export class RegisterComponent {
  credentials = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.credentials).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (error) => this.errorMessage = error.error.message
    });
  }
}
