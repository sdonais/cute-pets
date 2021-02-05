import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shay',
  templateUrl: './shay.component.html',
  styleUrls: ['./shay.component.scss']
})
export class ShayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shayInfo = {
    name: 'name: ',
    nicknames: 'nicknames: ',
    age: 'age: ',
    gender: 'gender: ',
    favs: 'favorite things: ',
  };

}
