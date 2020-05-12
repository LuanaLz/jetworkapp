import { DatabaseProvider } from './../providers/database/database';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbprovider : DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      dbprovider.createDatabase().then(() => {
        this.openTabsPage(splashScreen);
        // alert('Certo, banco feito');
      }).catch(e => {
        // alert('deu merda');
        console.error(e)
        this.openTabsPage(splashScreen);
      });
        
      
    });
  }

  public openTabsPage(splashScreen : SplashScreen){
    splashScreen.hide();
    this.rootPage = TabsPage;
  }
}
