import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalPostService {

  constructor(private http: HttpClient) { }

  openNotice(){
    return this.http.get<any>(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2`);
  }
}
