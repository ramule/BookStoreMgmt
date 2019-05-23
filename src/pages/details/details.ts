import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { BuyNowPage } from '../buy-now/buy-now';



@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  data: any
  cartData :  any =[]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FirebaseProvider,
    public toast: ToastController) {
    this.data = this.navParams.get('data');
    console.log("dgsh", this.data)

  }
  wishList(data) {
    var counter = 0;
    this.fb.getAllWishListData().subscribe(res => {
      
      for (let i = 0; i < res.length; i++) {
        if (res[i].name === data.name) {
          counter = 1
        }
      }
    })
      
      if (counter > 0) {
        let toast = this.toast.create({
          message: 'Book alredy added to wishlist!',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
      else {
        this.fb.addWishListData(data)
      }
    

  }
  addToCart(data) {
    console.log(data)
    var counter = 0;

    this.fb.getAllAddToCartData().subscribe(res => {
    
      for (let i = 0; i < res.length; i++) {
        if (res[i].name === data.name) {
          counter = 1;
        }
      }
    })
      if (counter > 0) {
        let toast = this.toast.create({
          message: 'Book alredy added to cart',
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      }
      else {
        this.cartData = {
          customerId : data.customerId,
          image : data.image,
          name : data.name,
          price : data.price,
          qyt : 1

        }

        this.fb.AddToCart(this.cartData);

      }

    


  }

  buyNow(data){

    console.log("axdbhabs",data)
    this.navCtrl.push(BuyNowPage,{data:data})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
