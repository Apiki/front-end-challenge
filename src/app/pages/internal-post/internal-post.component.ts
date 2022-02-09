import { Component, OnInit } from '@angular/core';
import { InternalPostService } from './internal-post.service';

@Component({
  selector: 'app-internal-post',
  templateUrl: './internal-post.component.html',
  styleUrls: ['./internal-post.component.css']
})
export class InternalPostComponent implements OnInit {

  constructor(private internalPost: InternalPostService) { }

  ngOnInit(): void {
    this.internalPost.openNotice().subscribe(dados =>
      {
        console.log(dados)
      })
  }

}
