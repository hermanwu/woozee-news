import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsComponent } from './news/news.component';
import { SharedAngularMaterialModule } from './shared/modules/shared-angular-material.module';
import { ThoughtDisplayComponent } from './thought-display/thought-display.component';

@NgModule({
  declarations: [AppComponent, NewsComponent, NewsPageComponent, ThoughtDisplayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
