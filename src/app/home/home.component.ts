import { IArticles } from './../app.type';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allPosts: IArticles[] = [];
  constructor(private service: AppService) {
    this.service.getAllPosts().subscribe((response) => {
      this.allPosts = response.articles;
    });
  }
  formatDate(date:Date) {
    return new Date(date).toLocaleString('en-US', {
      dateStyle:'medium'
    });
  }
  shortenText(text:string, maxLength:number = 140) {
     const maxTextLength = maxLength;
     const textToShorten = String(text);
     let shortenedText = textToShorten.substring(0, maxTextLength);
     if (textToShorten.length > maxTextLength) {
        return `${shortenedText}...`;
     }
     else {
        return shortenedText;
     }
  
  }
}
