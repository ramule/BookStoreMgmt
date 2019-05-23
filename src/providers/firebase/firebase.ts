
import { Injectable, NgZone } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  imageSource: any;
  value: any
  key: any;
  imgsource: any

  constructor(private afd: AngularFireDatabase, public zone: NgZone,

  ) {
    console.log('Hello FirebaseProvider Provider');
    this.value = this.afd.object('/Users/')
    console.log("VALUES", this.value)

  }
  getAllUsers() {
    return this.afd.list('/Users/');

  }

  addUser(user) {
    this.afd.list('/Users/').push(user);

  }
  getBiographyBooks() {
    return this.afd.list('/Biography/');
  }
  updateUser(user) {
    this.key = localStorage.getItem('UserKey')
    console.log("key", this.key)
    console.log("providerUpdateUser", user)
    this.afd.list('/Users/').update(this.key, user);
  }
  incrementCart(key,cart) {
    // console.log("key", this.key)
    // console.log("providerUpdateUser", user)
    this.afd.list('/addToCart/').update(key, cart);
  }
  decrementCart(key,cart) {
    // console.log("key", this.key)
    // console.log("providerUpdateUser", user)
    this.afd.list('/addToCart/').update(key, cart);
  }
  deleteFromCart(key){
    this.afd.list('/addToCart/').remove(key);
  }

  getBusinessBooks() {
    return this.afd.list('/Business/')
  }
  getComicBooks() {
    return this.afd.list('/Comic/')
  }
  getChildrenBooks() {
    return this.afd.list('/Children/')
  }
  getFictionBooks() {
    return this.afd.list('/Fiction/')
  }
  getAllWishListData() {
    return this.afd.list('/WishList/')
  }
 
  getLitBooks() {
    return this.afd.list('/Literature/');
  }
  getMythologyBooks(){
    return this.afd.list('/Mythology/')
  }
  addWishListData(data) {
    this.afd.list('/WishList/').push(data);

  }
  getInspirationBook() {
    return this.afd.list('/Inspirati  on/')
  }
  
  removeWishlistBook(id) {
    this.afd.list('/WishList/').remove(id);
  }

  getAllAddToCartData(){
    return this.afd.list('/addToCart/');
  }
  AddToCart(data){
    this.afd.list('/addToCart/').push(data)
  }
  OrderHistory(data){
    this.afd.list('/orderHistory/').push(data)
  }
  getAllOrderedHistoryData(){
    return this.afd.list('/orderHistory/')
  }

}



