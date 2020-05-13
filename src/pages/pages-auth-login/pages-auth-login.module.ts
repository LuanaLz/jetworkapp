import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesAuthLoginPage } from './pages-auth-login';

@NgModule({
  declarations: [
    PagesAuthLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesAuthLoginPage),
  ],
})
export class PagesAuthLoginPageModule {}
