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

  constructor(private formBuilder: FormBuilder, private connectionService: ConnectionService, private router: Router) {
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
  }

  onSubmit() {
    const formValue = this.contactForm.value;
    return this.connectionService.sendMessage(formValue).subscribe(() => {
      alert('Message envoyé !');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
      console.log(formValue);
      this.router.navigate(['/accueil']);
    }, error => {
      console.log('Error', error);
    });
  }
}

