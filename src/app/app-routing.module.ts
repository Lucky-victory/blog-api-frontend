import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleArticleComponent } from './single-article/single-article.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'article/:slug',
    component: SingleArticleComponent,
  },
  {
    path:'category/:category',
    component:CategoryPageComponent
  },{
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
