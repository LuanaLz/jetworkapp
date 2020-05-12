import { RegisterLoginPage } from './../register-login/register-login';
import { PublicarPage } from './../publicar/publicar';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  cadastro(){
    this.navCtrl.push(RegisterLoginPage);
  }

  publicar(){
    this.navCtrl.push(PublicarPage);
  }

}
