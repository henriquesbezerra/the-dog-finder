import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dog } from './dog-detail';

import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})

export class DogDetailComponent implements OnInit {

  dog: Dog;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDog();
  }

  getDog(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.dogService.getDog(id)
        .subscribe(dog => this.dog = dog);
  }

  goBack(): void{
    this.location.back();
  }

}
