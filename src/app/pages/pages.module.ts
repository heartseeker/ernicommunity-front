import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [{
  path: 'public',
  component: PagesComponent,
  children: [{
    path: 'registration',
    component: RegistrationComponent
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvj1QANZbHqRAWrx3zMRDBLXaYYrXzgXo'
    })
  ],
  declarations: [
    PagesComponent,
    RegistrationComponent,
  ]
})
export class PagesModule { }
