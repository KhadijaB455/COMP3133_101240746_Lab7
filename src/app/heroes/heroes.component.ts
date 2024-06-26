import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import {FormsModule} from '@angular/forms';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}