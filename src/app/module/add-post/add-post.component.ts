import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });
  user: any;
  response: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("userDetails") || '{}');
  }

  addPost() {
    this.httpClient.post<any>('http://localhost:8080/post-management/add', {
      userId: this.user.id,
      title: this.postForm.get('title')?.value,
      content: this.postForm.get('content')?.value
    }).subscribe(response => {
      this.response = response;
      this.router.navigateByUrl('/blog-post/' + this.response.id);
    });
  }

}
