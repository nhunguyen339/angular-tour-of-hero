import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched hero list')
    return of(HEROES);
  }

  getHero(heroId: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id ${heroId}`)
    return of(HEROES.find(hero => heroId === hero.id));
  }
}
