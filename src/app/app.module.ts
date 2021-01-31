import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AshComponent } from './ash/ash.component';
import { BeachyComponent } from './beachy/beachy.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { InMemoriamComponent } from './in-memoriam/in-memoriam.component';
import { MorePetsComponent } from './more-pets/more-pets.component';
import { RikuComponent } from './riku/riku.component';
import { ShayComponent } from './shay/shay.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    AshComponent,
    BeachyComponent,
    ContactComponent,
    HeaderComponent,
    InMemoriamComponent,
    MorePetsComponent,
    RikuComponent,
    ShayComponent,
    HomeComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
