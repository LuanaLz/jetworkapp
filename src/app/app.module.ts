import { FeedPage } from './../pages/feed/feed';
import { PublicarPage } from './../pages/publicar/publicar';
import { IntroPage } from './../pages/intro/intro';
import { RegisterLoginPage } from './../pages/register-login/register-login';
import { PerfilUserPage } from './../pages/perfil-user/perfil-user';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { PublicaDaoProvider } from '../providers/publica-dao/publica-dao';
import { UserDaoProvider } from '../providers/user-dao/user-dao';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PerfilUserPage,
    RegisterLoginPage,
    IntroPage,
    PublicarPage,
    FeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PerfilUserPage,
    RegisterLoginPage,
    IntroPage,
    PublicarPage,
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    SQLite,
    DatabaseProvider,
    PublicaDaoProvider,
    UserDaoProvider
  ]
})
export class AppModule {}
