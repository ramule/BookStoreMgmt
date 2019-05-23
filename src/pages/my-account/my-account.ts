import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { ViewProfilePage } from '../view-profile/view-profile';
import { UpdateProfilePage } from '../update-profile/update-profile'
import { OrderHistoryPage } from '../order-history/order-history';
import { WishlistPage } from '../wishlist/wishlist';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  userData : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public menu : MenuController) {
    menu.enable(true)
   
  }

  ionViewDidLoad() {
    this.userData = JSON.parse(localStorage.getItem("SpecificUser"));
    console.log("Value",this.userData)

    console.log('ionViewDidLoad MyAccountPage');
  }
  openMenu(){
    this.menu.toggle()
  }

  ViewProfile(){
    this.navCtrl.push(ViewProfilePage)
  }
  editProfile(){
    this.navCtrl.push(UpdateProfilePage)
  }
  orderHistory(){
    this.navCtrl.setRoot(OrderHistoryPage)
  }
  Wishlist(){
    this.navCtrl.setRoot(WishlistPage)
  }
  // feedback(){
  //   this.navCtrl.setRoot(Feed)
  // }

}
