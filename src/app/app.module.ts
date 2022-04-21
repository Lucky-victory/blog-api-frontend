import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';

import { SingleArticleComponent } from './single-article/single-article.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AuthorPageComponent } from './author-page/author-page.component';
import { TagPageComponent } from './tag-page/tag-page.component';
import { ClipboardModule } from 'ngx-clipboard';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AuthorDirective } from './author.directive';
import { BackNavigateComponent } from './back-navigate/back-navigate.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SingleArticleComponent, CategoryPageComponent, NotFoundComponent, AuthorPageComponent, TagPageComponent, LoaderComponent, AuthorDirective, BackNavigateComponent],
  imports: [BrowserModule,ClipboardModule, AppRoutingModule, HttpClientModule,NgHttpLoaderModule.forRoot()],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule {}
