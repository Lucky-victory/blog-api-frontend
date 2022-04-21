
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';
import { AppService } from '../app.service';
import { APP_BASE_URL, Utils } from '../constants';
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
    
     this.setMetaTags(this.singleArticle)
        });
    });
    
}
  formatDate(date:Date) {
   return Utils.formatDate(date);
  }
  setTitle(newTitle:string){
    this.pageTitle.setTitle(newTitle);
  }
  goToPage(path:any[]){
    this.router.navigate(path);
  }
  shareToSocial(social:string,options:{url:string,text?:string,via?:string}){
    const text=options['text'] ? options['text']:'';
const socialPoviders:{[key:string]:string}={
  'twitter':`https://twitter.com/share?url=${APP_BASE_URL}/article/${options['url']}&text=${text}`,
  'facebook':`http://www.facebook.com/sharer/sharer.php?u=${APP_BASE_URL}/article/${options['url']}`
}
window.open(`${socialPoviders[social]}`,'','width=700,height=800,top=0,left=400,scrollbar=no')
  }
  copyLink(link:string){
    this.service.copyToClipboard(link);
    this.copyLinkTitle='copied';
    setTimeout(() => {
      this.copyLinkTitle='copy link'
    }, 1000);
  }
 
  setMetaTags(singleArticle:ISingleArticle){
    this.pageMeta.addTags([{
      property:'og:url',content:`${APP_BASE_URL}/article/${this.singleArticle.slug}`
    },{
      property:'og:image',content:singleArticle.heroImage
    },{
           property:'og:title',content:singleArticle.title
        },{
          name:'twitter:creator',content:'@lucky_victory1'
       },
       {
        name:'twitter:image',content:singleArticle.heroImage
       },
       {
           property:'og:type',content:'website'
        },
        {
            property:'og:description',content:this.shortenText(singleArticle.content)
          }
          ],true)
  }
  shortenText(text:string){
    return Utils.shortenText(text)
  }
}
