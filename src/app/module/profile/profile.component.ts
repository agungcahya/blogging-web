import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  user: any;
  response: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("userDetails") || '{}');
    this.getProfile();
  }

  getProfile() {
    this.profileForm.get('name')?.setValue(this.user.name);
    this.profileForm.get('email')?.setValue(this.user.email);
    this.profileForm.get('password')?.setValue(this.user.password);
  }

  updateProfile() {
    this.httpClient.post<any>('http://localhost:8080/user-management/registration', {
      id: this.user.id,
      email: this.profileForm.get('email')?.value,
      name: this.profileForm.get('name')?.value,
      password: this.profileForm.get('password')?.value
    }).subscribe(response => {
      this.response = response;
      sessionStorage.setItem('userDetails', JSON.stringify(this.response));
    });
  }

}
