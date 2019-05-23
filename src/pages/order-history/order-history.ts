import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, MenuController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { HashLocationStrategy } from '@angular/common';


/**
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {
  data : any = []

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public fb:FirebaseProvider,
    public toastController : ToastController,
  public menu : MenuController) {
     this.fb.getAllOrderedHistoryData().subscribe(res =>{
       this.data = res
     });
     menu.enable(true);

  }
  openMenu(){
    this.menu.toggle()

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderHistoryPage');
  }

}

