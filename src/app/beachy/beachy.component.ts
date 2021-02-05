import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beachy',
  templateUrl: './beachy.component.html',
  styleUrls: ['./beachy.component.scss']
})
export class BeachyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  beachyInfo = {
    name: 'name: ',
    nicknames: 'nicknames: ',
    age: 'age: ',
    gender: 'gender: ',
    favs: 'favorite things: ',
  };

}
