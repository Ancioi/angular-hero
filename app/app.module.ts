/**
 * @author Francesco Borgosano
 * Created on 17/10/2016.
 *
 * This is the entry point of the application. Because it is
 * a web application we import the BrowerModule
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // Require for "Two-way" bindings
import { AppComponent }  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
