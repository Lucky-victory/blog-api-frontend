import { GlobalConstants } from './../constants/index';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

import { ISingleArticle } from './single-article.type';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css'],
})
export class SingleArticleComponent implements OnInit {
  singleArticle!: ISingleArticle;

  constructor(
    private activeRoute: ActivatedRoute,

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
          content: `${GlobalConstants.getBaseURL()}/article/${
            this.singleArticle.slug
          }`,
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
