import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  response: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.append('content-type', 'application/json');
    this.httpClient.post<any>('http://localhost:8080/user-management/user/login', {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }).subscribe(response =>{
      this.response = response;
      if (this.response != null) {
        sessionStorage.setItem('userDetails', JSON.stringify(this.response));
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

}
