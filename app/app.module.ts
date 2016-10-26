/**
 * @author Francesco Borgosano
 * Created on 17/10/2016.
 *
 * This is the entry point of the application. Because it is
 * a web application we import the BrowerModule
 */

// Imports of Required Modules
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
// Imports of Required Components
import {AppComponent} from "./app.component";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {DashboardComponent} from "./dashboard.component";
// Import of Required Services
import {HeroService} from "./hero.service"; // Require for "Two-way" bindings

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers:[ HeroService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }


