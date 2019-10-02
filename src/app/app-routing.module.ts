import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {IcontactComponent} from './icontact/icontact.component';
import {ArticledeuxComponent} from './articledeux/articledeux.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WipComponent} from './wip/wip.component';
import {FcrRouenComponent} from './partenaires/fcr-rouen/fcr-rouen.component';
import {RnRugbyComponent} from './partenaires/rn-rugby/rn-rugby.component';
import {MasselinComponent} from './partenaires/masselin/masselin.component';
import {AltitudeComponent} from './partenaires/altitude/altitude.component';
import {CreditMutuelComponent} from './partenaires/credit-mutuel/credit-mutuel.component';
import {NovicksComponent} from './partenaires/novicks/novicks.component';
import {FcontactComponent} from './fcontact/fcontact.component';
import {ResumeComponent} from './partenaires/resume/resume.component';
import {MentiolegComponent} from './mentioleg/mentioleg.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: HomeComponent},
  {path: 'contact', component: IcontactComponent},
  {path: 'article/:_id', component: ArticleComponent},
  {path: 'articles/liste', component: ArticledeuxComponent},
  {path: 'hello', component: FcontactComponent},
  {path: 'wip', component: WipComponent},
  {path: 'mentions-legales', component: MentiolegComponent},
  {path: 'partenaires/fc-rouen', component: FcrRouenComponent},
  {path: 'partenaires/rn-rugby', component: RnRugbyComponent},
  {path: 'partenaires/masselin', component: MasselinComponent},
  {path: 'partenaires/altitude', component: AltitudeComponent},
  {path: 'partenaires/credit-mutuel', component: CreditMutuelComponent},
  {path: 'partenaires/novicks', component: NovicksComponent},
  {path: 'partenaires', component: ResumeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, IcontactComponent, ArticleComponent, ArticledeuxComponent,
  WipComponent, MentiolegComponent, FcrRouenComponent, RnRugbyComponent, MasselinComponent,
  AltitudeComponent, CreditMutuelComponent, NovicksComponent, PageNotFoundComponent, FcontactComponent, ResumeComponent];
