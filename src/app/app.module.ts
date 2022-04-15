import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { Safe } from './pipes/pipe';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SinglePostComponent,Safe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports:[Safe]
})
export class AppModule {}
