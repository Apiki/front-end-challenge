import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitialService {

  constructor(private http: HttpClient) { }

  getNotice(page: number){
    return this.http.get<any>(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`);
  }
}
