import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-fcontact',
  templateUrl: './fcontact.component.html',
  styleUrls: ['./fcontact.component.css']
})

export class FcontactComponent implements OnInit {
  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;

  constructor() { }

  ngOnInit() {
    this.addRecaptchaScript();
  }

  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LetxbYUAAAAAOvi7t385XsbW86N-XsZxz05-Jh_',
      'callback': (response) => {
        console.log(response);
      }
    });
  }

  addRecaptchaScript() {

    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }

    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));

  }

}
