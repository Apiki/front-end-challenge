import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InitialService } from './initial.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],

})
export class InitialComponent implements OnInit {
notices: any[] = [];
page: number = 1;

constructor(private initialService: InitialService) { }
ngOnInit(): void {

  this.getNotices();
  
}

getNotices() {

  this.initialService.getNotice(this.page).subscribe(notices => {
    if (this.notices == undefined) {
      this.notices = notices
      console.log(this.notices);
    } else {
      this.notices = this.notices.concat(notices)
      console.log(this.notices);
    }
  });

}

loadMore(){
  this.page++;
  this.initialService.getNotice(this.page)
  this.getNotices();
}

}
