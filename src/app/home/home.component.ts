import { IPosts } from './../app.type';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allPosts: IPosts[] = [];
  constructor(private service: AppService) {
    this.service.getAllPosts().subscribe((response) => {
      this.allPosts = response;
    });
  }
}
