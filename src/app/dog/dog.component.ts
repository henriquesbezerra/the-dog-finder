import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { DogList } from './dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})

export class DogComponent implements OnInit {
  
  dogs: DogList[];  

  constructor(private dogService: DogService){}

  ngOnInit() {
    this.getDogsList();
  }

  getDogsList(): void{
    this.dogService.getDogList()
      .subscribe(dogs => this.dogs = dogs);   
  }

}
