import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listPost: any;
  user: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("userDetails") || '{}');
    console.log(this.user);
    console.log(this.user.id);
    this.getAllPost();
  }

  getAllPost() {
    this.httpClient.get('http://localhost:8080/post-management/posts').subscribe(
      response => {
        this.listPost = response;
      });
  }

  goToBlogPost(id: number) {
    this.router.navigate(['/blog-post', id]);
  }
}
