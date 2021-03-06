import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  heroId = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
    ) { }

  ngOnInit(): void {
    this.getHero(this.heroId);
  }

  goBack() {
    this.location.back();
  }

  getHero(heroId) {
    this.heroService.getHero(heroId)
      .subscribe(hero => this.hero = hero);
  }
}
