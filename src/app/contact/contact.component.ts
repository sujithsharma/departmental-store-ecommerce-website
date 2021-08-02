import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fb="./assets/images/facebook.png";
  insta="./assets/images/instagram.jfif";
  you="./assets/images/youtube.jpg";
  twitter="./assets/images/twitter.png";
  appstore="./assets/images/appstore.png";
playstore="./assets/images/playstore.png";
logo="./assets/images/logo.png";

}
