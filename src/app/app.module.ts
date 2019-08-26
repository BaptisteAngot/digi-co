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
import {FcontactComponent} from './fcontact/fcontact.component';
import {ArticleComponent} from './article/article.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ArticledeuxComponent} from './articledeux/articledeux.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TypingAnimationDirective } from 'angular-typing-animation';
import { NgwWowModule } from 'ngx-wow';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FcontactComponent,
    ArticleComponent,
    ArticledeuxComponent,
    HeaderComponent,
    HomeComponent,
    TypingAnimationDirective
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
    NgwWowModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
