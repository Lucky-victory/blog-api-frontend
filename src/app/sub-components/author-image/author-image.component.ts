import { ISingleArticle } from 'src/app/single-article/single-article.type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-image',
  templateUrl: './author-image.component.html',
  styleUrls: ['./author-image.component.css'],
})
export class AuthorImageComponent implements OnInit {
  @Input() author!: ISingleArticle['author'];
  constructor() {}

  ngOnInit(): void {}
}
