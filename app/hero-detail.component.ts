/**
 * @author Francesco Borgosano
 * Created on 24/10/16.
 *
 * Model for single hero component
 */
import {Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
    selector: 'my-hero-detail',
    template:`
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <!-- The double curly braces tell our app to read the title and hero properties from-->
            <!-- the component and render them. This is the "interpolation" form of one-way data binding.-->
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <!-- <input value="{{hero.name}}" placeholder="name">-->
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
        `
})
export class HeroDetailComponent{
    @Input()
    hero:Hero;
}
