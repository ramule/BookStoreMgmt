import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the UpdateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {
  data: any
  UpdateForm: FormGroup
  user: any = [];
  key: any


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public fb: FirebaseProvider) {
    this.data = JSON.parse(localStorage.getItem('SpecificUser'))
    this.key = localStorage.getItem('UserKey')
    this.UpdateForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      contact: ["", Validators.required],
      address: ["", Validators.required],
      pincode: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
  update() {
    console.log("updated_Value", this.UpdateForm.value)
    this.user = {
      name: this.UpdateForm.value.name,
      username: this.UpdateForm.value.email,
      password: this.UpdateForm.value.password,
      contact: this.UpdateForm.value.contact,
      address: this.UpdateForm.value.address,
      pincode: this.UpdateForm.value.pincode

    }
    console.log("hggnhhj", this.user)
    this.fb.updateUser(this.user);
    localStorage.setItem('SpecificUser',JSON.stringify(this.user))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProfilePage');
  }

}
