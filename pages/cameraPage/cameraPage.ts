import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../mapPage/mapPage';
import { AlbumPage } from '../albumPage/albumPage';
import { Photo } from '../../objects/photograph';
import { DataBaseService } from '../../services/databaseService';
import firebase from 'firebase';

@Component({
    selector: 'page-camera',
    templateUrl: 'cameraPage.html'
})

export class TakePhoto{
    goToMap = MapPage;
    goToAlbum = AlbumPage;

    constructor(public navCtrl: NavController, private dbSrvc: DataBaseService){

    }

    writeToFire(){
        //console.log("put write to file function here kinda");
        //let dyStmp: any;
        //let tmStmp: any; 
        /*var num = 1;
        var latiVar = 42.88;
        var longVar = -8.54;

        while (num <= 17){
            const initialStamp: Date = new Date();

            let newPhoto: Photo = {
                key: `test_image_${num}`,
                lat: latiVar,
                lng: longVar,
                daystamp: initialStamp.getMonth() + initialStamp.getDate() + initialStamp.getFullYear(),
                timestamp: initialStamp.getHours() + initialStamp.getMinutes() + initialStamp.getSeconds()
            }

            this.dbSrvc.addPhoto(newPhoto);
            num += 1;
            latiVar += 1;
            longVar -= 2;
        }*/
        this.dbSrvc.showPhotosKey();

    }
}