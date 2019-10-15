import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
declare var jQuery: any;
import { Article } from '../shared/articles';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private wowSubscription: Subscription;
  displayedColumns: string[] = ['title', 'created_at', 'updated_at', 'art_type'];
  data: Article[] = [];
  isLoadingResults = true;
  constructor(private router: Router, private wowService: NgwWowService, private api: ApiService) {
    this.router.events.pipe(filter (event => event instanceof NavigationEnd)).subscribe(event => {
      this.wowService.init();
    });
  }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
      });
    this.api.getArticlesLimit()
      .subscribe((res: any) => {
        console.log(res.articles.created_at);
        this.data = res.articles;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
