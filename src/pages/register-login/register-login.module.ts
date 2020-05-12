import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterLoginPage } from './register-login';

@NgModule({
  declarations: [
    RegisterLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterLoginPage),
  ],
})
export class RegisterLoginPageModule {}
