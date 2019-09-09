import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
