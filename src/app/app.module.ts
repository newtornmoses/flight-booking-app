import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {NewsService} from './news.service';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ScrollheaderDirective } from './scrollheader.directive';
import { FixsearchpannelDirective } from './fixsearchpannel.directive';
import { ShowtitleDirective } from './showtitle.directive';
import { DatepickerDirective } from './datepicker.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    ScrollheaderDirective,
    FixsearchpannelDirective,
    ShowtitleDirective,
    DatepickerDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
