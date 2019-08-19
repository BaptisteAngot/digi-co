import {Component, NgModule, OnInit} from '@angular/core';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  faLinkedin = faLinkedin;
  wallpath: string;

  constructor() {
    this.wallpath = './assets/img/wall.jpg';
  }

  ngOnInit() {
  }

}
