import {Component, OnInit} from '@angular/core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-articledeux',
  templateUrl: './articledeux.component.html',
  styleUrls: ['./articledeux.component.css']
})
export class ArticledeuxComponent implements OnInit {
  faLinkedin = faLinkedin;
  data;
  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getArticles()
      .subscribe((res: any) => {
        this.data = res.articles;
        console.log(this.data);
      }, err => {
        console.log(err);
      });
  }

}
