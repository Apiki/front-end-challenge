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
  varcount: number = 0;

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
        for (let Autores of notices) {
          if (Autores._embedded.author[0].name == undefined) {
            Autores._embedded.author[0].name = 'Autor Desconhecido'

          }
        }
        console.log(this.notices);

      } else {
        this.notices = this.notices.concat(notices)
        console.log(this.notices);
      }
      var i = 0
      for (let image of notices) {
        //console.log(`${this.varcount++}`, image._embedded.author[0].avatar_urls[48])
        try {
          image._embedded.author[0].imgAuthor = image._embedded.author[0]?.avatar_urls[48]
        } catch (erro: any) {
          image._embedded.author[0].imgAuthor = 'https://i.pravatar.cc/40?img=1'
          console.log(image._embedded.author[0].imgAuthor)
        }


        /*if(image._embedded.author[0].data.status != 'undefined'){
          console.log('i: ', i)
          i++
          console.log('1: ',image._embedded.author[0].avatar_urls[48] )
          image._embedded.author[0].imgAuthor = image._embedded.author[0].avatar_urls[48]
        }else{
          image = null
          image._embedded.author[0].avatar_urls[48] = null
          console.log('entrou:',this.image)
        }*/



        //console.log(this.image)
      }
    });
  }

  handleReadMore(link: string) {
    this.internalService.slug = link
    this.route.navigate(['/internal-post'])
  }

  handleLoadMore() {
    this.page++;
    this.initialService.getNotice(this.page)
    this.getNotices();
  }

}
