import { API_BASE_URL } from './constants/utils';
import { IArticlesResponse } from './app.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISinglePost } from './single-post/single-post.type';

@Injectable()

export class AppService {
  private singlePostUrl= API_BASE_URL+'/article'
  private allPostUrl = API_BASE_URL + '/articles';
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<IArticlesResponse> {
    return this.http.get<IArticlesResponse>(this.allPostUrl);
  }
  getSinglePost(slug: string | null):Observable<ISinglePost>{
    
return this.http.get<ISinglePost>(this.singlePostUrl+'/'+slug);

  }
}
