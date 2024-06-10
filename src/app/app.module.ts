import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResizableModule } from 'angular-resizable-element';
import { CustomerBLibraryModule } from 'customer-b-library';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResizableModule,
    CustomerBLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
