import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { IArticles, IArticlesResponse } from '../app.type';
@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css'],
})
export class AuthorPageComponent implements OnInit {
  articles: IArticles[] = [];
  authorName: string | null = '';
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private service: AppService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.authorName = params.get('username');
    });
    this.service.get(`${'author/' + this.authorName}`).subscribe((response) => {
      this.articles = response.articles;
    });
  }
  goToPage(path: any[]): void {
    this.router.navigate(path);
  }
}
