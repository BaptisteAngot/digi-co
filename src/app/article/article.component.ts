import {Component, NgModule, OnInit} from '@angular/core';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  faLinkedin = faLinkedin;
  wallpath: string;
  article = [];

  constructor( private router: Router, private api: ApiService, private route: ActivatedRoute) {
    this.wallpath = './assets/img/wall.jpg';
  }

  getArticleDetails(_id: any) {
    this.api.getArticle(_id)
      .subscribe((data: any) => {
        this.article.push(data.article);
        console.log(this.article);
      });
  }

  ngOnInit() {
    this.getArticleDetails(this.route.snapshot.params._id);
  }

}
