import { Component, Input, OnInit } from '@angular/core';
import { IArticles } from 'src/app/app.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() articles!: IArticles[];
  constructor() { }

  ngOnInit(): void {
  }

}
