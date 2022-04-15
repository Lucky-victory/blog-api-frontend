
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { ISingleArticle } from './single-article.type';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
singleArticle:ISingleArticle={
  heroImage:'',
  views:0,
  slug:'',
  title:'',
  content:'',
  tags:[],
  readTime:0
  ,id:'',
  publishedAt:new Date(),
  category:'',
  comments:[],
  author:{
    bio:'',
    username:'',
    fullname:'',
    twitter:'',
    profileImage:'',
    id:''
  }
}

  constructor(private route:ActivatedRoute,private service:AppService,private pageTitle:Title, private pageMeta:Meta) { 

  }

  ngOnInit(): void {
    let slug:string | null='';
this.route.paramMap.subscribe(params=>{
   slug=params.get('slug');
});
  this.service.getSingleArticle(slug).subscribe(onePost=>{
this.singleArticle=onePost;
this.setTitle(this.singleArticle.title);
})
  }
  formatDate(date:Date) {
    return new Date(date).toLocaleString('en-US', {
      dateStyle:'medium'
    });
  }
  setTitle(newTitle:string){
    this.pageTitle.setTitle(newTitle);
  }
}
