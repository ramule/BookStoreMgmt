import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { LoginPage } from '../login/login';


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  registerForm: FormGroup;
  userList: any = [];
  // id : any 
  // UID : any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public fireProvider: FirebaseProvider,
    public view: ViewController) {
    this.registerForm = formBuilder.group({
      name: ["", Validators.compose([Validators.required,Validators.minLength(10)])],
      username: ["", Validators.compose([Validators.required,Validators.email])],
      password: ["", Validators.compose([Validators.required])],
      contact: ["", Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      address: ["", Validators.compose([Validators.required])],
      pincode: ["", Validators.compose([Validators.required,Validators.maxLength(6)])],
    })
  }

  register() {

    this.userList = {
      name: this.registerForm.value.name,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      contact: this.registerForm.value.contact,
      address: this.registerForm.value.address,
      pincode: this.registerForm.value.pincode
    }
    console.log("UserList", this.userList);
    this.fireProvider.addUser(this.userList);
    console.log("Registration Info:=", this.registerForm);


    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
