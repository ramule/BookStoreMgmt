import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RegistrationPage } from '../registration/registration';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  LoginForm: FormGroup;
  registeredUsers: FirebaseListObservable<any[]>
  usersList: any = [];
  List: any = [];
  specificUser: any
  id: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public firebaseProvider: FirebaseProvider,
    public alertCtrl: AlertController) {
    this.LoginForm = formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],

    })

    this.registeredUsers = this.firebaseProvider.getAllUsers();
    console.log("DATA", this.registeredUsers)
    this.registeredUsers.subscribe(Response => {
      this.usersList = Response;
      // this.id = Response.keys
      console.log("DataBase =", this.usersList);
    })

  }
  login() {

    try {
      var counter = 0;
      this.usersList.forEach(element => {
        if (this.LoginForm.value.username === element.username && this.LoginForm.value.password === element.password) {
          this.specificUser = element;
          counter = 1;
        }

      })

      if (counter > 0) {
        let alert = this.alertCtrl.create({
          title: 'LoggedIn successfully!',
          subTitle: 'You are successfully logged into application!',
          buttons: ['OK']
        });
        alert.present()
        this.navCtrl.setRoot(ListPage);
        console.log("sjdxjsaxj", this.specificUser)
        localStorage.setItem("SpecificUser", JSON.stringify(this.specificUser))
        localStorage.setItem("UserKey", this.specificUser.$key)

      }

      else {
        let alert = this.alertCtrl.create({
          title: 'Oops! Login Failed',
          subTitle: 'Enter Correct Username and Password!',
          buttons: ['OK']
        });
        alert.present()
        console.log("jsabchb", this.LoginForm);
      }

    }
    finally {


    }
  }
  
  Register() {
    this.navCtrl.setRoot(RegistrationPage);
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

}
