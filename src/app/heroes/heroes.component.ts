import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero/IHero';

@Component({
    selector: 'Heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    hero: IHero = { id: 69, name: 'Banestorm' };

    constructor() {}

    ngOnInit(): void {}
}
