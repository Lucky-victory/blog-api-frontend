import { API_BASE_URL } from './constants/utils';
import { IArticlesResponse } from './app.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISingleArticle } from './single-article/single-article.type';

@Injectable()

export class AppService {
  private singleArticleUrl= API_BASE_URL+'/article';
  private allPostUrl = API_BASE_URL + '/articles';
  private apiBaseUrl=API_BASE_URL;
  constructor(private http: HttpClient) {}
  getArticles(path?:string): Observable<IArticlesResponse> {
    return this.http.get<IArticlesResponse>(`${this.allPostUrl}${path ? '?'+path:''}`);
  }
  getSingleArticle(slug: string | null):Observable<ISingleArticle>{
    
return this.http.get<ISingleArticle>(this.singleArticleUrl+'/'+slug);

  }
  getCategories(path:string):Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}${path ? path:''}`);
  }
}
