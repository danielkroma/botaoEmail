import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public emailComposer:EmailComposer) {}
  enviarEmail(){
    let email = {
      to: 'danielkroma9@gmail.com',
      cc: 'danielkroma9@gmail.com',
      bcc: ['danielkroma9@gmail.com', 'danielkroma9@gmail.com@doe.com'],
      attachments: [
        //'file://img/logo.png',
        //'res://icon.png',
        //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        //'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }
}
