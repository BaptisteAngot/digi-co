import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
// tslint:disable-next-line:max-line-length
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FcontactComponent,
    ArticleComponent,
    ArticledeuxComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
