import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class ProfileComponent implements OnInit {
  userInfo: any = {
    user_id: null,
    height: '',
    weight: '',
    birth_date: ''
  };

  errorMessage = '';
  loading = true;
  isNew = false;

  constructor(
    private userInfoService: UserInfoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }

    this.userInfo.user_id = userId;

    this.userInfoService.getUserInfo().subscribe({
      next: (data) => {
        this.userInfo = {
          user_id: data.user_id,
          height: data.height,
          weight: data.weight,
          birth_date: data.birth_date
        };
        this.loading = false;
        this.isNew = false;
      },
      error: (err) => {
        if (err.status === 404) {
          this.isNew = true;
        } else {
          this.errorMessage = 'Failed to load user info.';
        }
        this.loading = false;
      }
    });
  }

  save() {
    const userId = this.authService.getUserId();
    if (!userId) return;
  
    this.userInfo.user_id = userId;
  
    this.userInfoService.getUserInfo().subscribe({
      next: (_) => {
        this.userInfoService.updateUserInfo(this.userInfo).subscribe({
          error: () => this.errorMessage = 'Saving failed (update).'
        });
      },
      error: (err) => {
        if (err.status === 404) {
          this.userInfoService.createUserInfo(this.userInfo).subscribe({
            error: () => this.errorMessage = 'Saving failed (create).'
          });
        } else {
          this.errorMessage = 'Something went wrong while saving.';
        }
      }
    });
  }
  
  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      this.authService.deleteAccount().subscribe({
        next: () => {
          alert('Account deleted');
          this.router.navigate(['/login']);
        },
        error: () => this.errorMessage = 'Deletion failed.'
      });
    }
  }
}
