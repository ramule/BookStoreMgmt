import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';


/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  data: any = []
  customerId: any
  wishListData: any = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FirebaseProvider,
    public toastCtrl: ToastController,
    public menu: MenuController) {


    menu.enable(true)

  }
  openMenu() {
    this.menu.toggle();
  }

  removeBook(key) {
    console.log(key)
    this.fb.removeWishlistBook(key);
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    let toast = this.toastCtrl.create({
      message: 'Book removed from wishList!'
    })
    toast.present()

  }

  ionViewDidLoad() {
    this.customerId = localStorage.getItem('UserKey');
    var counter = 0
    this.fb.getAllWishListData().subscribe(res => {

      for (let i = 0; i < res.length; i++) {
        if (res[i].customerId == this.customerId) {
          this.data.push(res[i]);
          counter = 1;
        }

      }
    })
    if (counter > 0) {

    }
    else {
      let toast = this.toastCtrl.create({
        message: 'Data Not Available!'
      })
      toast.present()
    }
    console.log('ionViewDidLoad WishlistPage');
  }

}
