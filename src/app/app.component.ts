import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavParams ,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list'   
import { WishlistPage } from '../pages/wishlist/wishlist'
import { OrderHistoryPage } from '../pages/order-history/order-history'
import { TermsAndconditionsPage } from '../pages/terms-andconditions/terms-andconditions'
import { HelpPage } from '../pages/help/help'
import { ContactusPage } from '../pages/contactus/contactus'
import { MyAccountPage } from '../pages/my-account/my-account'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage : any
  pages: any = [];
  userData :any
  value : any = []


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public alertCtrl:AlertController) {
    platform.ready().then(() => {
      
      this.value = localStorage.getItem('SpecificUser')
      console.log("value",this.value)
      if(this.value !== null){
        this.rootPage = ListPage
      }
      else {
        this.rootPage = LoginPage

      }
     
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: "Home", component: ListPage ,icon : 'home'},
      { title: "WishList", component: WishlistPage ,icon : 'heart'},
      { title: "Order History", component: OrderHistoryPage,icon :'filing' },
      { title: "Terms & Conditions", component: TermsAndconditionsPage ,icon :'paper'},
      { title: "Help", component: HelpPage,icon :'help-circle' },
      { title: "ContactUs", component: ContactusPage,icon : 'contacts' },
      { title: "My Account", component: MyAccountPage,icon :'contact' },
      { title : "Logout " , component : null , icon :"log-out"}
    ];
  }

  OpenPage(page) {
    if(page.component == null){
      let alert = this.alertCtrl.create({
        message :'Are you sure you want to logout?',
        buttons : [
          {
            text : 'Yes',
            handler : () =>{
              localStorage.clear();
              this.nav.setRoot(LoginPage)
            }
          },
          {
            text : 'No',
            handler : ()=> {
              console.log("No clicked");
            }

          }
        ]
      })
      alert.present()
    }
    else{
   
    this.nav.setRoot(page.component)
    }
    
  }
}

