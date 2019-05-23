import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public firebaseProvaider:FirebaseProvider,
    public menu: MenuController,
    public zone:NgZone ) {
      menu.enable(true);  
  }

  openMenu(){
    this.menu.toggle();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }
}
