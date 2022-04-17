import { IArticles } from './../app.type';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  allArticles: IArticles[] = [];
  category:string|null='';
  allCategories:string[]=[];
  constructor(private service: AppService,private router:Router,private activatedRoute:ActivatedRoute) {
   
  }
  ngOnInit(){
    this.activatedRoute.queryParamMap.subscribe(params=>{
       this.category=params.get('category');
      const categoryPram=this.category ? 'category='+this.category:'';
      this.service.getArticles(categoryPram).subscribe((res) => {
        this.allArticles = res.articles;
      });
    });

    this.service.getCategories('/categories').subscribe(res=>{
      this.allCategories=res.categories;
      console.log(this.allCategories);
    });
  }
  getCategories(){

    

  }
  getArticleByCategory(category:string){
    const categoryParam=category ? 'category='+category:'';
    this.router.navigate([''],{queryParams:category!=''?{category}:{ }})
    this.service.getArticles(categoryParam).subscribe(res=>{
      this.allArticles=res.articles
    })
  
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
