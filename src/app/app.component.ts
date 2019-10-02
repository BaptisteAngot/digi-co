import {Component, NgModule, OnInit, OnDestroy, ViewChild} from '@angular/core';
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
  template: '<app-header></app-header><main [@fadeAnimation]="o.isActivated ? o.activatedRoute : \'\'">' +
    '  <router-outlet #o="outlet"></router-outlet></main><app-footer></app-footer>' +
    '<cookie-law #cookieLaw position="bottom" target="_self"><h1 class="text-center titre">Ce site web contient des cookies</h1><br />' +
    '<p class="text-center sous-titre">En poursuivant la navigation sur le site, vous acceptez l\'utilisation' +
    ' des cookies pour améliorer l\'expérience utilisateur, réaliser des statistiques et permettre le partage de contenu.</p>' +
    '<button  class ="btn btn-info" (click)="dismiss()">Accepter tous les cookies</button><br /><button (click)="dismiss()" ' +
    'class="btn btn-dark confid" routerLink="/wip" routerLinkActive="active">En savoir plus</button></cookie-law>',
  styles: [
    'router-outlet ~ * {' +
    'position: absolute;' +
    'height: 100%;' +
    'width: 100%;' +
    '}' +
    '.sous-titre {' +
    'font-size: 10px;' +
    '}' +
    '.titre {' +
    'text-transform: uppercase;' +
    '}' +
    'button {' +
    'display: block;' +
    'margin: auto;' +
    'text-transform: uppercase;' +
    '}' +
    '.confid {' +
    'padding-bottom: 2vh;' +
    '}'],
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
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
  @ViewChild('cookieLaw', {static: false})
  private cookieLawEl: any;
  faCoffee = faCoffee;
  subscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => window.scrollTo(0, 0));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public dismiss(): void {
    this.cookieLawEl.dismiss();
  }
}
