
import { UserDaoProvider } from './../../providers/user-dao/user-dao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-login',
  templateUrl: 'register-login.html',
})
export class RegisterLoginPage {

  public user : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterLoginPage');
  }

}


