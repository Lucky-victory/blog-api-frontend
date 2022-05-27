import { GlobalConstants } from './constants';
import { IArticlesResponse } from './app.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISingleArticle } from './single-article/single-article.type';

@Injectable()
export class AppService {
  private singleArticleUrl = GlobalConstants.API_BASE_URL + '/article';
  private allPostUrl = GlobalConstants.API_BASE_URL + '/articles';
  private apiBaseUrl = GlobalConstants.API_BASE_URL;
  constructor(private http: HttpClient) {}
  getArticles(params?: { [key: string]: any }): Observable<IArticlesResponse> {
    return this.http.get<IArticlesResponse>(`${this.allPostUrl}`, {
      params,
    });
  }
  getSingleArticle(slug: string | null): Observable<ISingleArticle> {
    return this.http.get<ISingleArticle>(this.singleArticleUrl + '/' + slug);
  }
  get(path: string): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/${path}`);
  }
  getCategories(path: string): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}${path ? path : ''}`);
  }
}
