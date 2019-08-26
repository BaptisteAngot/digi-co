import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icontact',
  templateUrl: './icontact.component.html',
  styleUrls: ['./icontact.component.css']
})
export class IcontactComponent implements OnInit {
contactpath: string;

  constructor() {
    this.contactpath = './assets/img/contact_rouen.jpg';
  }

  ngOnInit() {
  }

}
