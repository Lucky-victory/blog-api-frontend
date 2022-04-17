import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { IArticles, IArticlesResponse } from '../app.type';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
articles:IArticles[]=[];
category:string|null='';
  constructor(private router:ActivatedRoute, private service:AppService) { }

  ngOnInit(): void {
    
    this.router.paramMap.subscribe(params=>{
      this.category=params.get('category')
    });
    this.service.getArticles(`${this.category ? 'category='+this.category:''}`).subscribe(response=>{
      this.articles=response.articles
    })
  }

}
