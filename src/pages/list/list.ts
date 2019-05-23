import { Component ,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController  } from 'ionic-angular';
import * as firebase from 'firebase';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

import { BiographyBookPage } from '../biography-book/biography-book'
import { ComicBookPage } from '../comic-book/comic-book'
import { InspirationalBookPage } from '../inspirational-book/inspirational-book'
import { ChildrenBookPage } from '../children-book/children-book'
import { MythologyBookPage } from '../mythology-book/mythology-book'
import { LiteratureBookPage } from '../literature-book/literature-book'
import { BusinessBookPage} from '../business-book/business-book'
import { FictionBookPage} from '../fiction-book/fiction-book'
import { AddToCartPage } from '../add-to-cart/add-to-cart';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  BiogaphyImages:any=[];
  biographyImage1:string;
  biographyImage2:string;
  biographyImage3:string;
  biographyImage4:string;
  biographyImage5:string;
  biographyImage6:string;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu:MenuController,
    public firebaseProvaider:FirebaseProvider,
    public zone:NgZone ) {
    menu.enable(true);  
    // this.getBiographyImages(); 
  
  }

  openMenu(){
    this.menu.toggle();
  }
  AddToCart(){
    this.navCtrl.push(AddToCartPage)
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad ListPage');
  }

   Biography(){
    this.navCtrl.push(BiographyBookPage)
  }

  Children(){
    this.navCtrl.push(ChildrenBookPage)

  }

  Business(){
    this.navCtrl.push(BusinessBookPage)

  }

  Comic(){
    this.navCtrl.push(ComicBookPage)

  }

  Inspiration(){
    this.navCtrl.push(InspirationalBookPage)
  }

  Mythology(){
    this.navCtrl.push(MythologyBookPage)

  }

  Fiction(){
    this.navCtrl.push(FictionBookPage)
  }

  Literature(){
    this.navCtrl.push(LiteratureBookPage)
  }
}
