import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './Components/components.module';


import { DirectivesModule } from './Directives/directives.modules';

@NgModule({
  declarations: [
    AppComponent,
    
   
   
    // UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    DirectivesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
