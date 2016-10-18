/**
 * @author Francesco Borgosano
 * Created on 17/10/2016.
 *
 * A component controls a portion of the screen—a view—through its associated template.
 */
import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}


@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <!-- The double curly braces tell our app to read the title and hero properties from-->
        <!-- the component and render them. This is the "interpolation" form of one-way data binding.-->
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <!-- <input value="{{hero.name}}" placeholder="name">-->
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
  `

})
export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

}
