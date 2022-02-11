import { InternalPostService } from './../internal-post/internal-post.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InitialService } from './initial.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],

})
export class InitialComponent implements OnInit {

page: number = 1;
notices: any;
aut: any;
slug: string;
image: string;

constructor(
  private initialService: InitialService,
  private route: Router,
  private internalService: InternalPostService
  ) { }
ngOnInit(): void {

this.getNotices();

}

getNotices() {

  this.initialService.getNotice(this.page).subscribe((notices: any) => {
    if (this.notices == undefined) {
      this.notices = notices;
      for(let Autores of notices){
        if(Autores._embedded.author[0].name == undefined)
        {
          Autores._embedded.author[0].name = 'Autor Desconhecido'

        }
      }
      console.log(this.notices);
      
    } else {
      this.notices = this.notices.concat(notices)
      console.log(this.notices);
    }
    
    for(let image of notices){
      image = image._embedded.author[0].avatar_urls[48]
      this.image = image
     
      
      console.log(this.image)
    }
  });
}

handleReadMore(link:string){
  this.internalService.slug = link
  this.route.navigate(['/internal-post'])
}

handleLoadMore(){
  this.page++;
  this.initialService.getNotice(this.page)
  this.getNotices();
}

}
