import { Component, InjectionToken, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { APP_BASE_URL } from '../constants';

import { ISingleArticle } from './single-article.type';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css'],
})
export class SingleArticleComponent implements OnInit {
  singleArticle!: ISingleArticle;
  baseUrl: InjectionToken<string> = APP_BASE_URL;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private service: AppService,
    private pageTitle: Title,
    private pageMeta: Meta
  ) {}

  ngOnInit(): void {
    let slug: string | null = '';
    this.activeRoute.paramMap.subscribe((params) => {
      slug = params.get('slug');
      this.service.getSingleArticle(slug).subscribe((article) => {
        this.singleArticle = article;
        this.setTitle(this.singleArticle.title);

        this.setMetaTags(this.singleArticle);
      });
    });
  }

  setTitle(newTitle: string) {
    this.pageTitle.setTitle(newTitle);
  }

  setMetaTags(singleArticle: ISingleArticle) {
    this.pageMeta.addTags(
      [
        {
          property: 'og:url',
          content: `${APP_BASE_URL}/article/${this.singleArticle.slug}`,
        },
        {
          property: 'og:image',
          content: singleArticle.heroImage,
        },
        {
          property: 'og:title',
          content: singleArticle.title,
        },
        {
          name: 'twitter:creator',
          content: '@lucky_victory1',
        },
        {
          name: 'twitter:image',
          content: singleArticle.heroImage,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
      true
    );
  }
}
