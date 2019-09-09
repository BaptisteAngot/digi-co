import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
declare var jQuery: any;

@Component({
  selector: 'app-fcr-rouen',
  templateUrl: './fcr-rouen.component.html',
  styleUrls: ['./fcr-rouen.component.scss']
})
export class FcrRouenComponent implements OnInit {

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

