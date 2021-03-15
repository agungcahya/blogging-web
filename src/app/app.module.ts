import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './module/register/register.component';
import { MyBlogComponent } from './module/my-blog/my-blog.component';
import { BlogPostComponent } from './module/blog-post/blog-post.component';
import { NavbarComponent } from './module/navbar/navbar.component';
import { AddPostComponent } from './module/add-post/add-post.component';
import { ProfileComponent } from './module/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    MyBlogComponent,
    BlogPostComponent,
    NavbarComponent,
    AddPostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
