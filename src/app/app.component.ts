import { IArticles, IArticlesResponse } from './app.type';

import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppService } from './app.service';
import { LoaderComponent } from './loader/loader.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog-api-frontend';
  post: IArticles[] = [];
  loaderComponent=LoaderComponent;
  constructor(
    private service: AppService,
    private meta: Meta,
    private pageTitle: Title
  ) {
    this.pageTitle.setTitle('new title');
    this.service.getArticles().subscribe((res) => {
      this.post = res.articles;
    });
  }
}
