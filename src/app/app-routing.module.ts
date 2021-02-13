import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AshComponent } from "./ash/ash.component";
import { BeachyComponent } from "./beachy/beachy.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { InMemoriamComponent } from "./in-memoriam/in-memoriam.component";
import { MorePetsComponent } from "./more-pets/more-pets.component";
import { RikuComponent } from "./riku/riku.component";
import { ShayComponent } from "./shay/shay.component";
import { AriComponent } from "./snakes/ari/ari.component";
import { AureliaComponent } from "./snakes/aurelia/aurelia.component";
import { CookieComponent } from "./snakes/cookie/cookie.component";
import { DevoComponent } from "./snakes/devo/devo.component";
import { MykonosComponent } from "./snakes/mykonos/mykonos.component";
import { SaturnComponent } from "./snakes/saturn/saturn.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'ash', component: AshComponent },
    { path: 'beachy', component: BeachyComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'shay', component: ShayComponent },
    { path: 'riku', component: RikuComponent },
    { path: 'in-memoriam', component: InMemoriamComponent },
    { path: 'more-pets', component: MorePetsComponent },
    { path: 'snakes/ari', component: AriComponent },
    { path: 'snakes/cookie', component: CookieComponent },
    { path: 'snakes/mykonos', component: MykonosComponent },
    { path: 'snakes/aurelia', component: AureliaComponent },
    { path: 'snakes/devo', component: DevoComponent },
    { path: 'snakes/saturn', component: SaturnComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]
}) 
export class AppRoutingModule {

}