import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {IcontactComponent} from './icontact/icontact.component';
import {ArticledeuxComponent} from './articledeux/articledeux.component';
import {WipComponent} from './wip/wip.component';


const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: HomeComponent},
  {path: 'contact', component: IcontactComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'articleVideo', component: ArticledeuxComponent},
  {path: 'wip', component: WipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, IcontactComponent, ArticleComponent, ArticledeuxComponent, WipComponent];
