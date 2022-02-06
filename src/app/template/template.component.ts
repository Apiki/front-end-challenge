import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
  sidebarService: any;
  layoutService: any;
  menuService: any;
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
  }
  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
