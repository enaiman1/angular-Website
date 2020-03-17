import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionModule } from  './collection/collection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    CollectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
