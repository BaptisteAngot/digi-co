import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-fcontact',
  templateUrl: './fcontact.component.html',
  styleUrls: ['./fcontact.component.css']
})

export class FcontactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value);
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      prenom: [''],
      nom: [''],
      mail: [''],
      societe: [''],
      message: ['']
    });
  }

  ngOnInit() {

  }



}
