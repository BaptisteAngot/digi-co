import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {WavesModule, ButtonsModule, IconsModule} from 'angular-bootstrap-md';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import { fadeAnimation } from './animation';

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
export class AppComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() {
  }

  ngOnInit() {
  }

}
