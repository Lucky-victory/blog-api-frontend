import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { ISinglePost } from './single-post.type';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
singlePost:ISinglePost={
  heroImage:'',
  views:0,
  slug:'',
  title:''
}

  constructor(private route:ActivatedRoute,private service:AppService) { 

  }

  ngOnInit(): void {
    let slug:string | null='';
this.route.paramMap.subscribe(params=>{
   slug=params.get('slug');
});
  this.service.getSinglePost(slug).subscribe(onePost=>{
this.singlePost=onePost;
})
  }

}
