import { Component, OnInit } from '@angular/core';

import { DOGS } from '../mock-dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})

export class DogComponent implements OnInit {
  
  dogs = DOGS;

  constructor() { }

  ngOnInit() {
  }

}
