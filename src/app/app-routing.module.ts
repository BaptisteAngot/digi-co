import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {IcontactComponent} from './icontact/icontact.component';
import {ArticledeuxComponent} from './articledeux/articledeux.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WipComponent} from './wip/wip.component';
import {FcrRouenComponent} from './partenaires/fcr-rouen/fcr-rouen.component';


const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: HomeComponent},
  {path: 'contact', component: IcontactComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'articleVideo', component: ArticledeuxComponent},
  {path: 'wip', component: WipComponent},
  {path: 'partenaires/fcr-rouen', component: FcrRouenComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, IcontactComponent, ArticleComponent, ArticledeuxComponent,
  WipComponent, PageNotFoundComponent, FcrRouenComponent];
