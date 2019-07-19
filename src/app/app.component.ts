import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Digi and Co';
    myForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            nom: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
            message: ['', [Validators.required, Validators.minLength(15)]]
        });
    }

    onSubmit(form: FormGroup) {
        console.log('Valide ?', form.valid);
        console.log('Nom', form.value.name);
        console.log('Email', form.value.email);
        console.log('Message', form.value.message);
    }
}
