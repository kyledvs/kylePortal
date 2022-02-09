import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {

  selected!: Date | null;


  collapsed: any;
  expanded: any;


  constructor() { }

  ngOnInit(): void {
  }

}
