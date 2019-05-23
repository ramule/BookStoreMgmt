import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { DetailsPage } from '../details/details';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';



/**
 * Generated class for the BuyNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-buy-now',
  templateUrl: 'buy-now.html',
})
export class BuyNowPage {
  data : any =[]
  BuyNowForm : FormGroup
  formData : any = []
  value : any = []
  name : any
  CheckoutValue : any = []

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public fb : FormBuilder,
    public fp : FirebaseProvider,
  public alert : AlertController) {

    this.value = JSON.parse(localStorage.getItem('SpecificUser'))
    console.log("NAME",this.value)
   
    this.data = this.navParams.get('data');
    console.log("gvgvgh",this.data)
  this.BuyNowForm = this.fb.group({
    name: ["", Validators.compose([Validators.required])],
    address: ["", Validators.compose([Validators.required])],
    contact: ["", Validators.compose([Validators.required])],


  })
  }


  Checkout(data){
    console.log("CheckoutData",data)
    this.CheckoutValue = {
      Username : this.BuyNowForm.value.name,
      address : this.BuyNowForm.value.address,
      contact : this.BuyNowForm.value.contact,
      image : data.image,
      BookName : data.name,
      price : data.price,
      status : "ORDERED"
    }
    this.navCtrl.setRoot(ListPage)
    this.fp.OrderHistory(this.CheckoutValue);
    let alert = this.alert.create({
      message : " Your order has been successful!",
      buttons : [
        {
          text : "ok",
          handler : () =>{

          } 
        }
      ]
    });
    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyNowPage');
  }

}
