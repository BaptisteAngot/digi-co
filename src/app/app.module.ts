import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {FcontactComponent} from './fcontact/fcontact.component';
import {
  ButtonsModule,
  CheckboxModule,
  IconsModule,
  InputsModule,
  InputUtilitiesModule,
  ModalModule,
  WavesModule
} from 'angular-bootstrap-md';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ArticledeuxComponent} from './articledeux/articledeux.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HeaderComponent} from './header/header.component';
// import { TypingAnimationDirective } from 'angular-typing-animation';
import {TypingAnimationDirective, TypingAnimationModule} from 'angular-typing-animation';
import {NgwWowModule} from 'ngx-wow';
import {WipComponent} from './wip/wip.component';
import {FormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import { ArticleclientComponent } from './articleclient/articleclient.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FcontactComponent,
    ArticledeuxComponent,
    HeaderComponent,
    // TypingAnimationDirective,
    routingComponents,
    WipComponent,
    PageNotFoundComponent,
    SignupComponent,
    SigninComponent,
    ArticleclientComponent
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
    FormsModule,
    TypingAnimationModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
