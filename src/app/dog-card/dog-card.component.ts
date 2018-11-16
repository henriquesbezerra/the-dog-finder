import { Component, OnInit, Input } from '@angular/core';
import { DogList } from '../dog/dog';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {

  @Input() dogs: DogList[];
  
  constructor() { }

  ngOnInit() {
  }

}
