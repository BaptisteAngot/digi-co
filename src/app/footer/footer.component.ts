import {Component, NgModule, OnInit} from '@angular/core';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons/faYoutubeSquare';
import {faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons/faArrowAltCircleDown';
import {faArrowAltCircleUp} from '@fortawesome/free-regular-svg-icons/faArrowAltCircleUp';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  faArrowAltCircleDown = faArrowAltCircleDown;
  faArrowAltCircleUp = faArrowAltCircleUp;
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faYoutube = faYoutubeSquare;

  constructor() {

  }

  ngOnInit() {
  }

}
