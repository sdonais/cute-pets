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
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]
}) 
export class AppRoutingModule {

}