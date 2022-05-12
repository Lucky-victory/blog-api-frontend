import { Component, Input, OnInit } from '@angular/core';
import { IArticles } from 'src/app/app.type';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
@Input() article!: IArticles
  constructor() { }

  ngOnInit(): void {
  }

}
