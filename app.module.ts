import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { MapPage } from '../pages/mapPage/mapPage';
import { AlbumPage } from '../pages/albumPage/albumPage';
import { TakePhoto } from '../pages/cameraPage/cameraPage';

import { HttpModule } from '@angular/http';
import { FIREBASE_CONFIG } from '../app/firebase.config';

@NgModule({
  declarations: [
    MyApp,
    TakePhoto,
    MapPage,
    AlbumPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TakePhoto,
    MapPage,
    AlbumPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
