import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import firebase from 'firebase';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { WishlistPage } from '../wishlist/wishlist';
import { DetailsPage } from '../details/details'


@Component({
  selector: 'page-literature-book',
  templateUrl: 'literature-book.html',
})
export class LiteratureBookPage {
  literatureBook: any = [];
  img: any
  customerId: any
  data: any = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public zone: NgZone,
    public fb: FirebaseProvider,
    public loading: LoadingController,
    public toastCtrl: ToastController) {
    this.img = this.fb.getLitBooks();

    this.img.subscribe(res => {
      this.PresentLoader();
      this.literatureBook = res
      console.log("IMAGES_InFo", this.literatureBook)
    })
  }

  PresentLoader() {
    let loading = this.loading.create({
      content: 'Please Wait...',
      duration: 1000
    })
    loading.present()
  }
  wishList(data) {
    console.log("KEY", data)
    var counter = 0 ;
    this.fb.getAllWishListData().subscribe(res => {
      
      for (let i = 0; i < res.length; i++) {
        if (res[i].name === data.name) {
          counter = 1
        }

      }
    })
      if (counter > 0) {
        let toast = this.toastCtrl.create({
          message: 'Book alredy added to wishlist!',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
      else {
        let toast = this.toastCtrl.create({
          message: 'Added to wishList',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.customerId = localStorage.getItem('UserKey')
        this.data = {
          image: data.image,
          name: data.name,
          price: data.price,
          customerId: this.customerId
        }
        console.log("DATA", this.data)
        this.fb.addWishListData(this.data)


        // this.fb.addWishListData(data)
      }
    

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LiteratureBookPage');
  }

  openModel(i) {
    console.log("I", i)
    this.customerId = localStorage.getItem('UserKey')
    this.data = {
      image: i.image,
      name: i.name,
      price: i.price,
      customerId: this.customerId
    }
    this.navCtrl.push(DetailsPage, { data: this.data })
  }
}
