import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
  
  menuService: any;
  constructor() { }

  ngOnInit(): void {
  }
  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
