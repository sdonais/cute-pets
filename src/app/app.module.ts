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
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './dropdown.directive';
import { DoggoService } from './more-pets/doggo.service';
import { SnakesComponent } from './snakes/snakes.component';
import { AriComponent } from './snakes/ari/ari.component';
import { CookieComponent } from './snakes/cookie/cookie.component';
import { MykonosComponent } from './snakes/mykonos/mykonos.component';
import { AureliaComponent } from './snakes/aurelia/aurelia.component';
import { DevoComponent } from './snakes/devo/devo.component';
import { SaturnComponent } from './snakes/saturn/saturn.component';

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
    DropdownDirective,
    SnakesComponent,
    AriComponent,
    CookieComponent,
    MykonosComponent,
    AureliaComponent,
    DevoComponent,
    SaturnComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DoggoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
