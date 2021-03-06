import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { ServerBrowserComponent } from './components/server-browser/server-browser.component';
import { ServerBrowserItemComponent } from './components/server-browser-item/server-browser-item.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ServerDetailsComponent } from './components/server-details/server-details.component';
import { MessagesComponent } from './components/messages/messages.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [AppComponent, ServerBrowserComponent, ServerBrowserItemComponent, NewsComponent, NewsItemComponent, ServerDetailsComponent, MessagesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
