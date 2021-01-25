import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AshComponent } from './ash/ash.component';
import { BeachyComponent } from './beachy/beachy.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { InMemoriamComponent } from './in-memoriam/in-memoriam.component';
import { MorePetsComponent } from './more-pets/more-pets.component';
import { RikuComponent } from './riku/riku.component';
import { ShayComponent } from './shay/shay.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AshComponent,
    BeachyComponent,
    ContactComponent,
    HeaderComponent,
    InMemoriamComponent,
    MorePetsComponent,
    RikuComponent,
    ShayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
