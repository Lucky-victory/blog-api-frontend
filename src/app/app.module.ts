import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { Safe } from './pipes/pipe';
import { SingleArticleComponent } from './single-article/single-article.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SingleArticleComponent,Safe, CategoryPageComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports:[Safe]
})
export class AppModule {}
