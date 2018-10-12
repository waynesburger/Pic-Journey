import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Photo } from '../objects/photograph';
import { UserInfo } from '../objects/userInfo';
import { UserInfoExtract } from '../objects/UserInfoRet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase';
//import {} from '../assets/imgs'

@Injectable()
export class DataBaseService {

    //DONT KEEP THIS HERE FOREVER
    private username: string = 'person_1';

    private userInfoRef: any;
    private usersPhotosRef: any;
    private photosInfoRef: any; //AngularFireList<Photo>;
    private photocollectionRef: any;
       //private personalInfo: UserInfo;
       //private newuskeyyyy: any;

    constructor(private afDatabase: AngularFireDatabase, private afStorage: AngularFireStorage){
        this.userInfoRef = this.afDatabase.object(`users/${this.username}`);
        this.usersPhotosRef = this.afDatabase.list(`photos`);

        let dataRetreived = this.retreiveData();
        if(dataRetreived.photosRef === null || dataRetreived.photosRef === undefined){
            let dummy: Photo ={
                lat: 0.0,
                lng: 0.0,
                daystamp: '0',
                timestamp: '0'
            }

            let newUserPath = this.usersPhotosRef.push({dummy});
            let newUserKey = newUserPath.key;

            let newValue: UserInfo = {
                password: 'ThisIZ2vulnerabl3',
                email: 'johnHopkins@zoho.com',
                phone: '1-509-555-5555',
                photosRef: newUserKey
            }

            this.userInfoRef.set(newValue);
        }

        this.photosInfoRef = this.afDatabase.list<Photo>(`photos/${this.userInfoRef.photosRef}`);
        // this.photocollectionRef = this.afStorage.ref(`${this.username}_photos`);
        this.photocollectionRef = firebase.storage().ref().child(`${this.username}_images`);
    }

    retreiveData(){
        let dataToGet: UserInfoExtract;
        this.userInfoRef.snapshotChanges().subscribe(action=>{
            dataToGet.username  = action.key;
            dataToGet.password  = action.payload.val().password;
            dataToGet.email     = action.payload.val().email;
            dataToGet.phone     = action.payload.val().phone;
            dataToGet.photosRef = action.payload.val().photosRef;
        });
        
        return dataToGet;
    }

    showPhotosKey(){
        //console.log(`the new user info is:\n   Password: ${this.userInfoRef.password}\n   email: ${this.userInfoRef.email}\n   Cell Number: ${this.userInfoRef.phone}\n   Place in photos: ${this.userInfoRef.photosRef}\n`);
        //console.log(this.newuskeyyyy.key);
        this.userInfoRef.snapshotChanges().subscribe(action=>{
            console.log(`here is the type: ${action.type}`);
            console.log(`here is the key: ${action.key}`);
            console.log(`here is the full value: ${action.payload.val().photosRef}`);
        });

    }

    addPhoto(newPhoto: Photo){
        this.photosInfoRef.push(newPhoto);
        this.photocollectionRef.put(`../assets/imgs/${newPhoto.key}`);
    }

    deletePhoto(){

    }

    changePhotoName(){

    }

    


}