import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arpath: string;
  constructor() {
    this.arpath = '/assets/img/icone/thin-arrowheads-pointing-down.svg';
  }

  ngOnInit() {
  }

}
