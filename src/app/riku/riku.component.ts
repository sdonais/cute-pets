import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riku',
  templateUrl: './riku.component.html',
  styleUrls: ['./riku.component.scss']
})
export class RikuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rikuInfo = {
    name: 'name: ',
    nicknames: 'nicknames: ',
    age: 'age: ',
    gender: 'gender: ',
    favs: 'favorite things: ',
  };

}
