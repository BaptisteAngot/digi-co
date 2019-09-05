import {Component, NgModule, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {WavesModule, ButtonsModule, IconsModule} from 'angular-bootstrap-md';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {fadeAnimation} from './animation';
import {NavigationEnd, Router, RouterModule, Routes} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]

})
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    WavesModule,
    ButtonsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  faCoffee = faCoffee;
  subscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      // tslint:disable-next-line:align
      filter(event => event instanceof NavigationEnd)).subscribe(() => window.scrollTo(0, 0));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
