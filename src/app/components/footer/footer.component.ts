import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  fbpath: string;
  twpath: string;
  lnpath: string;
  inpath: string;
  constructor() {
    this.fbpath = '/assets/img/logosocialm/facebook.svg';
    this.inpath = '/assets/img/logosocialm/instagram.svg';
    this.lnpath = '/assets/img/logosocialm/linkedin.svg';
    this.twpath = '/assets/img/logosocialm/twitter.svg';
  }

  ngOnInit() {
  }

}
