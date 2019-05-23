import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController} from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the TermsAndconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-terms-andconditions',
  templateUrl: 'terms-andconditions.html',
})
export class TermsAndconditionsPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public menu: MenuController,
     public zone:NgZone ) {
      menu.enable(true); 
  }

  openMenu(){
    this.menu.toggle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsAndconditionsPage');
  }

}
