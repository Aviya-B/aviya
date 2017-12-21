import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavService } from "./nav.service";
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AsideComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
