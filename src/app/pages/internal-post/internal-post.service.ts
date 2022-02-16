import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalPostService {

  slug: string;

  constructor(private http: HttpClient) { }

  openNotice() {
    console.log(this.slug)
    console.log('link do link:' +this.http.get<any>(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${this.slug}`))
    return this.http.get<any>(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${this.slug}`);
  }
}
