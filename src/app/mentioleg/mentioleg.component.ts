import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-mentioleg',
  templateUrl: './mentioleg.component.html',
  styleUrls: ['./mentioleg.component.scss']
})
export class MentiolegComponent implements OnInit {

  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.wowService.init();
    });
  }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
      });
  }
}
