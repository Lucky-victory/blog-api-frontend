

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute,  Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';
import { AppService } from '../app.service';
import { APP_BASE_URL} from '../constants';

import { ISingleArticle } from './single-article.type';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})

export class SingleArticleComponent implements OnInit {
  
  singleArticle!: ISingleArticle;
baseUrl:string=APP_BASE_URL;
spinnerStyle=Spinkit;
copyLinkTitle:string='copy link';
  constructor(private activeRoute:ActivatedRoute,private router:Router, private service:AppService,private pageTitle:Title, private pageMeta:Meta) { 

  }

  ngOnInit(): void {
    let slug:string | null='';
this.activeRoute.paramMap.subscribe(params=>{
   slug=params.get('slug');
  this.service.getSingleArticle(slug).subscribe(article => {
    
     this.singleArticle=article;
     this.setTitle(this.singleArticle.title);
    
     this.setMetaTags(this.singleArticle)
        });
    });
    
}
 
  setTitle(newTitle:string){
    this.pageTitle.setTitle(newTitle);
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
       
          ],true)
  }
 
}
