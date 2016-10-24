/**
 * @author Francesco Borgosano
 * Created on 24/10/16.
 *
 * Hero data service. This service makes available
 * hero's data to various components within the app
 */

import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService{

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

}