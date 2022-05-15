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
  sortBy:string|null='';
  allCategories:string[]=[];
  
  constructor(private service: AppService,private router:Router,private activatedRoute:ActivatedRoute) {
   
  }
  ngOnInit(){
    this.activatedRoute.queryParamMap.subscribe(params=>{
       this.sortBy=params.get('sort');
      const sortQueryParam = this.sortBy ? { sort: this.sortBy }:{};
      this.service.getArticles(sortQueryParam).subscribe((res) => {
        this.allArticles = res.articles;
      });
    });

    this.service.getCategories('/categories').subscribe(res=>{
      this.allCategories=res.categories;
     
    });
  }
  getCategories(){

    

  }
  getArticleByCategory(category:string){
    // const categoryParam=category ? 'category='+category:'';
    // this.router.navigate([''],{queryParams:category!=''?{category}:{ }})
    // this.service.getArticles(categoryParam).subscribe(res=>{
    //   this.allArticles=res.articles
    // })
  
  }
 
}
