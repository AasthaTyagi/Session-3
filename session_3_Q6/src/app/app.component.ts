import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'session_3';
  posts: any[] =[]

  constructor(private apiService : ApiService){}

  ngOnInit() {
    this.apiService.getPosts().subscribe(data=> {
      this.posts=data})
  }
}
