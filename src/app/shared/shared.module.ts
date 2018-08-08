import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ApiService } from './service/api.service';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ConfirmDialogComponent
  ],
  declarations: [
    ConfirmDialogComponent
  ],
  providers: [
    ApiService,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
