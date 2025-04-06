import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';
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
  userInfo = {
    height: '',
    weight: '',
    birth_date: '',
    usr_picture: ''
  };

  errorMessage = '';

  constructor(private userInfoService: UserInfoService, private router: Router) {}

  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe({
      next: (data) => {
        this.userInfo = data;
      },
      error: () => {
        // -
      }
    });
  }

  save() {
    this.userInfoService.saveUserInfo(this.userInfo).subscribe({
      next: () => alert('Saved successfully'),
      error: () => this.errorMessage = 'Saving failed.'
    });
  }

  deleteAccount() {
    if (confirm('Are you sure you want to delete your account?')) {
      this.userInfoService.deleteAccount().subscribe({
        next: () => {
          alert('Account deleted');
          this.router.navigate(['/login']);
        },
        error: () => this.errorMessage = 'Deletion failed.'
      });
    }
  }
}
