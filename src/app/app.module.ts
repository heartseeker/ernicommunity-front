import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPListener, HTTPStatus } from './core/interceptor';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

const routes: Routes = [{
  path: '',
  redirectTo: 'public/registration',
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PagesModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [
    HTTPStatus,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPListener,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
