import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';


/**
 * Generated class for the AddToCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-add-to-cart',
  templateUrl: 'add-to-cart.html',
})
export class AddToCartPage {
  cartData : any = []
  price : any
  cart : any = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FirebaseProvider) {
      this.fb.getAllAddToCartData().subscribe(res =>{
        this.cartData = res

      })
  }
  increment(i){
    console.log(i)
    var qty = i.qyt + 1;
     var key = i.$key;
     this.cart ={
       qyt : qty
     }
     this.fb.incrementCart(key,this.cart)
         

    console.log(qty);
    //this.pric
    
  }

  decrement(i){
    var qty = i.qyt;
    var key = i.$key;
    this.cart ={
      qyt : qty - 1
    }
    if(qty <= 1){
      this.fb.deleteFromCart(key)
    }
    else{
      this.fb.decrementCart(key,this.cart)
    }
    
     
 console.log(i);
  }

  delete(data){
    var key = data.$key;
    console.log(key);
    this.fb.deleteFromCart(key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddToCartPage');
  }

}
