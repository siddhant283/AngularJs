import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncValidatorsComponent } from './async-validators/async-validators.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

@NgModule({
  declarations: [
    AppComponent,
    AsyncValidatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RxReactiveFormsModule,
    HttpClientModule,
    RxReactiveDynamicFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
