import { Component, OnInit } from '@angular/core';
import { DoggoService } from './doggo.service';

@Component({
  selector: 'app-more-pets',
  templateUrl: './more-pets.component.html',
  styleUrls: ['./more-pets.component.css']
})
export class MorePetsComponent implements OnInit {
  doggo; 

  constructor(public doggoService: DoggoService) {}

  ngOnInit() {
    this.getPic();
  }

  getPic() {
    this.doggoService.fetchDoggos().subscribe(
      data => {
        this.doggo = data;
      }, 
      error => {
        console.log("error");
      }
    );
  } //end function 

} //end class
