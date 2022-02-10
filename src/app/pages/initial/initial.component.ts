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

constructor(private initialService: InitialService) { }
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
  });
}

handleReadMore(link:string){
  
  console.log('Linkzada:' +link)
}

handleLoadMore(){
  this.page++;
  this.initialService.getNotice(this.page)
  this.getNotices();
}

}
