import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.httpClient.post<any>('http://localhost:8080/user-management/registration', {
      email: this.profileForm.get('email')?.value,
      name: this.profileForm.get('name')?.value,
      password: this.profileForm.get('password')?.value
    }).subscribe(response =>
      console.log(response));
      this.router.navigateByUrl('/login');
  }
}
