import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {WavesModule, ButtonsModule, IconsModule} from 'angular-bootstrap-md';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export class AppComponent {
  title = 'Digi&Co';
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
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


    constructor() {
    }

    ngOnInit() {
    }


}

