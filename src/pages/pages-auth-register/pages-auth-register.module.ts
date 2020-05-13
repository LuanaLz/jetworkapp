import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesAuthRegisterPage } from './pages-auth-register';

@NgModule({
  declarations: [
    PagesAuthRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesAuthRegisterPage),
  ],
})
export class PagesAuthRegisterPageModule {}
