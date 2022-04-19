
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';
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
    profileImage:'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?cs=srgb&dl=pexels-rodolfo-clix-1615776.jpg&fm=jpg&w=640&h=960',
    id:''
  }
};
baseUrl:string='';
spinnerStyle=Spinkit;
copyLinkTitle:string='copy link';
  constructor(private activeRoute:ActivatedRoute,private router:Router, private service:AppService,private pageTitle:Title, private pageMeta:Meta,private location:Location) { 

  }

  ngOnInit(): void {
    let slug:string | null='';
this.activeRoute.paramMap.subscribe(params=>{
   slug=params.get('slug');
   this.service.getSingleArticle(slug).subscribe(onePost=>{
     this.singleArticle=onePost;
     this.setTitle(this.singleArticle.title);
    
     this.baseUrl=this.location.path(false);
     this.pageMeta.addTags([{
       property:'og:image',content:this.singleArticle.heroImage
     },{
            property:'og:title',content:this.singleArticle.title
         },
         {
             name:'description',content:this.singleArticle.title
           }
           ],true)
        });
    });
}
  formatDate(date:Date) {
    return new Date(date).toLocaleString('en-US', {
      dateStyle:'medium'
    });
  }
  setTitle(newTitle:string){
    this.pageTitle.setTitle(newTitle);
  }
  goToPage(path:any[]){
    this.router.navigate(path);
  }
  shareToSocial(social:string,options:{url:string,text?:string,via?:string}){
    const text=options['text'] ? options['text']:'';
const socialPoviders:{[key:string]:any}={
  'twitter':`https://twitter.com/share?url=/article/${options['url']}&text=${text}`,
  'facebook':`http://www.facebook.com/sharer/sharer.php?u=https://4200-luckyvictory-blogapifron-bdig643ohqk.ws-eu40.gitpod.io/article/${options['url']}`
}
window.open(`${socialPoviders[social]}`,'','width=700,height=800,top=0,left=400')
  }
  copyLink(link:string){
    this.service.copyToClipboard(link);
    this.copyLinkTitle='copied';
    setTimeout(() => {
      this.copyLinkTitle='copy link'
    }, 1000);
  }
  shareToTwitter(slug:string,text?:string){
window.open(`https://twitter.com/share?url=${slug}&${text ? 'text='+text:''}`,'','width=700,height=800,top=0,left=400,scrollbar=no')
  }
}
