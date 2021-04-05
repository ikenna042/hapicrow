import { Component, OnInit } from '@angular/core';

import "@codetrix-studio/capacitor-google-auth";
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInfo = null;

  constructor() { }

  ngOnInit() {
  }

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn();
    console.log('user: ', googleUser);
    this.userInfo = googleUser;
  }

}
