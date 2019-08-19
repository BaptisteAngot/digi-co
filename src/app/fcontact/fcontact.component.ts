import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-fcontact',
  templateUrl: './fcontact.component.html',
  styleUrls: ['./fcontact.component.css']
})
export class FcontactComponent implements OnInit {
  contactForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
