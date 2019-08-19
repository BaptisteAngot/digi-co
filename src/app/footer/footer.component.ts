import {Component, NgModule, OnInit} from '@angular/core';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  constructor() {

  }

  ngOnInit() {
  }

}
