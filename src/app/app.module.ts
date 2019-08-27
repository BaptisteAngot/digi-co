import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {
  ButtonsModule,
  CheckboxModule,
  IconsModule,
  InputsModule,
  InputUtilitiesModule,
  ModalModule,
  WavesModule
} from 'angular-bootstrap-md';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ArticledeuxComponent} from './articledeux/articledeux.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { TypingAnimationDirective } from 'angular-typing-animation';
import { NgwWowModule } from 'ngx-wow';
import { WipComponent } from './wip/wip.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ArticledeuxComponent,
    HeaderComponent,
    TypingAnimationDirective,
    routingComponents,
    WipComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputsModule,
    ButtonsModule,
    WavesModule,
    ModalModule,
    IconsModule,
    InputUtilitiesModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    NgwWowModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
