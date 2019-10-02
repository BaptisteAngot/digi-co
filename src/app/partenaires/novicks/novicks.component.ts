import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-novicks',
  templateUrl: './novicks.component.html',
  styleUrls: ['./novicks.component.scss']
})
export class NovicksComponent implements OnInit {

  private wowSubscription: Subscription;
  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events.pipe(filter (event => event instanceof NavigationEnd)).subscribe(event => {
      this.wowService.init();
    });
  }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
      });
  }
}
