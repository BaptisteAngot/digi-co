import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-altitude',
  templateUrl: './altitude.component.html',
  styleUrls: ['./altitude.component.scss']
})
export class AltitudeComponent implements OnInit {

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
