import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InitialService } from './initial.service'

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
notices: any;

constructor(private initialService: InitialService) { }
ngOnInit(): void {

this.initialService.getNotice().subscribe(notices => {this.notices = notices});
  }

}
