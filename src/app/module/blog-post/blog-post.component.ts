import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  response: any;
  blogPost: any;
  id: number;
  listComment: any;
  user: any;
  commentForm = new FormGroup({
    content: new FormControl('', Validators.required)
  });
  constructor(
    private httpClient: HttpClient,
    private activeRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("userDetails") || '{}');
    this.activeRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getPost();
  }

  getPost() {
    this.httpClient.get('http://localhost:8080/post-management/posts?id=' + this.id).subscribe(
      response => {
        this.response = response;
        this.blogPost = this.response[0];
        this.getComment(this.blogPost.id);
      });
  }

  getComment(postId: number) {
    this.httpClient.get('http://localhost:8080/comment-management/comments?postId=' + postId).subscribe(
      response => {
        this.listComment = response;
      });
  }

  addComment() {
    this.httpClient.post<any>('http://localhost:8080/comment-management/add', {
      userId: this.user.id,
      postId: this.blogPost.id,
      content: this.commentForm.get('content')?.value
    }).subscribe(response => {
      this.response = response;
      window.location.reload();
    });
  }

}
