import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {

  listPost: any;
  userId: number = 4;
  user: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("userDetails") || '{}');
    this.getAllPost();
  }

  getAllPost() {
    this.httpClient.get('http://localhost:8080/post-management/posts?userId=' + this.user.id).subscribe(
      response => {
        this.listPost = response;
      });
  }

  goToBlogPost(id: number) {
    this.router.navigate(['/blog-post', id]);
  }
}
