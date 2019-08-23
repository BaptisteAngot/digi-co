import {Component, OnInit} from '@angular/core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';


@Component({
  selector: 'app-articledeux',
  templateUrl: './articledeux.component.html',
  styleUrls: ['./articledeux.component.css']
})
export class ArticledeuxComponent implements OnInit {
  faLinkedin = faLinkedin;

  constructor() {
  }

  ngOnInit() {
  }

}
