import { API_BASE_URL } from './constants/utils';
import { IArticlesResponse } from './app.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private allPostUrl = API_BASE_URL + '/articles';
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<IArticlesResponse> {
    return this.http.get<IArticlesResponse>(this.allPostUrl);
  }
}
