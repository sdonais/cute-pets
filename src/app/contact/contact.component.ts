import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() { 
    this.contactForm = new FormGroup({
      'name': new FormControl('', Validators.required), //could be string to be displayed, like 'Your Name'
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'thoughts': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.contactForm);
  }

}
