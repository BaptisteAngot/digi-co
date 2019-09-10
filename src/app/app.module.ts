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
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
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
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FcontactComponent} from './fcontact/fcontact.component';
import {RecaptchaModule} from 'ng-recaptcha';
import {FormGroup, FormBuilder, Validator} from '@angular/forms';
import { ResumeComponent } from './partenaires/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    // TypingAnimationDirective,
    SignupComponent,
    SigninComponent,
    FcontactComponent,
    routingComponents,
    ResumeComponent,
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
    HttpClientModule,
    NoopAnimationsModule,
    RecaptchaModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
