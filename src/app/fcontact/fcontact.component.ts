import {Component, OnInit, HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConnectionService} from '../services/connection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fcontact',
  templateUrl: './fcontact.component.html',
  styleUrls: ['./fcontact.component.css']
})

export class FcontactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton = true;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService, private router: Router) {
    this.contactForm = fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      mail: ['', Validators.required],
      societe: ['', Validators.required],
      message: ['', Validators.required],
      contactFormCopy: [''],
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
    this.router.navigate(['/accueil']);
  }

}
