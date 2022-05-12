import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private activeRoute:ActivatedRoute,private router:Router, private service:AppService) { }

  ngOnInit(): void {
    
    this.activeRoute.paramMap.subscribe(params=>{
    this.category=params.get('category');
  
    });
    this.service.getArticles(`${'category='+this.category}`).subscribe(response=>{
      this.articles=response.articles
    })
  }
  goToPage(path:any[]):void{
    this.router.navigate(path);
  }
 
}