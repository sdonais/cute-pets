import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ash',
  templateUrl: './ash.component.html',
  styleUrls: ['./ash.component.scss']
})
export class AshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ashInfo = {
    name: 'name: ',
    nicknames: 'nicknames: ',
    age: 'age: ',
    gender: 'gender: ',
    breed: 'breed: ',
    favs: 'favorite things: ',
    facts: 'interesting facts about him: '
  };

}
