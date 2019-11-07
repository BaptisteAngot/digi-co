import {Component, OnInit, HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConnectionService} from '../services/connection.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fcontact',
  templateUrl: './fcontact.component.html',
  styleUrls: ['./fcontact.component.css']
})

export class FcontactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton = true;
  endpoint: string;
  mail: string;
  prenom: string;
  nom: string;
  societe: string;
  message: string;

  http: HttpClient;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private formBuilder: FormBuilder, private connectionService: ConnectionService, private router: Router,
              http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      mail: ['', Validators.required],
      societe: ['', Validators.required],
      message: ['', Validators.required],
    });
    this.endpoint = 'http://digiandco.com/api/contact.php';
  }

  onSubmit() {
    const postVars = {
      prenom: this.prenom,
      nom: this.nom,
      mail: this.mail,
      societe: this.societe,
      message: this.message
    };
    this.http.post(this.endpoint, postVars)
      .subscribe(
        response => console.log(response),
        response => console.log(response)
      );
  }
}

