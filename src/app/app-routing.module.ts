import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './module/login/login.component';
import {RegisterComponent} from './module/register/register.component';
import {DashboardComponent} from './module/dashboard/dashboard.component';
import {MyBlogComponent} from './module/my-blog/my-blog.component';
import {BlogPostComponent} from './module/blog-post/blog-post.component';
import {AddPostComponent} from './module/add-post/add-post.component';
import {ProfileComponent} from './module/profile/profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'my-blog', component: MyBlogComponent},
  {path: 'new-post', component: AddPostComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'blog-post/:id', component: BlogPostComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
