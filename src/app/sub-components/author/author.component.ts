import { Component, Input, OnInit } from '@angular/core';
import { ISingleArticle } from 'src/app/single-article/single-article.type';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() singleArticle!: ISingleArticle;
  constructor() { }

  ngOnInit(): void {
  }

}
