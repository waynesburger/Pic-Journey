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
import { ImagesPage } from '../pages/viewImagePage/viewImagePage';

import { HttpModule } from '@angular/http';
import { FIREBASE_CONFIG } from '../app/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DataBaseService } from '../services/databaseService';

@NgModule({
  declarations: [
    MyApp,
    TakePhoto,
    MapPage,
    AlbumPage,
    ImagesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TakePhoto,
    MapPage,
    AlbumPage,
    ImagesPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataBaseService
  ]
})
export class AppModule {}
