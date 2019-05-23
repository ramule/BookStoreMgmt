import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ListPage } from '../pages/list/list';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { WishlistPage } from '../pages/wishlist/wishlist'
import { OrderHistoryPage } from '../pages/order-history/order-history'
import { TermsAndconditionsPage } from '../pages/terms-andconditions/terms-andconditions'
import { HelpPage } from '../pages/help/help'
import { ContactusPage } from '../pages/contactus/contactus'
import { MyAccountPage } from '../pages/my-account/my-account'
import { DetailsPage } from '../pages/details/details'

import { BiographyBookPage } from '../pages/biography-book/biography-book'
import { ComicBookPage } from '../pages/comic-book/comic-book'
import { InspirationalBookPage } from '../pages/inspirational-book/inspirational-book'
import { ChildrenBookPage } from '../pages/children-book/children-book'
import { MythologyBookPage } from '../pages/mythology-book/mythology-book'
import { LiteratureBookPage } from '../pages/literature-book/literature-book'
import { BusinessBookPage} from '../pages/business-book/business-book'
import { FictionBookPage} from '../pages/fiction-book/fiction-book'
import { ViewProfilePage } from '../pages/view-profile/view-profile'
import { UpdateProfilePage } from '../pages/update-profile/update-profile'
import { AddToCartPage } from '../pages/add-to-cart/add-to-cart'
import { BuyNowPage } from '../pages/buy-now/buy-now'
 

var config = {
  apiKey: "AIzaSyDHOdwqoEnOuAuWoUS3GH9V0dTm-dVBpC0",
  authDomain: "bookstore-34fd9.firebaseapp.com",
  databaseURL: "https://bookstore-34fd9.firebaseio.com",
  projectId: "bookstore-34fd9",
  storageBucket: "gs://bookstore-34fd9.appspot.com",
  messagingSenderId: "136194495930"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    WishlistPage,
    OrderHistoryPage,
    RegistrationPage,
    TermsAndconditionsPage,
    HelpPage,
    ContactusPage,
    MyAccountPage,
    ListPage,
    BiographyBookPage,
    BusinessBookPage,
    FictionBookPage,
    MythologyBookPage,
    ComicBookPage,
    ChildrenBookPage,
    LiteratureBookPage,
    InspirationalBookPage,
    ViewProfilePage,
    UpdateProfilePage,
    DetailsPage,
    AddToCartPage,
    BuyNowPage

  ],
  imports: [
    BrowserModule,

    AngularFireDatabaseModule,      
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuyNowPage,
    LoginPage,
    WishlistPage,
    OrderHistoryPage,
    TermsAndconditionsPage,
    HelpPage,
    ContactusPage,
    MyAccountPage,
    ListPage,
    BiographyBookPage,
    BusinessBookPage,
    FictionBookPage,
    MythologyBookPage,
    ComicBookPage,
    ChildrenBookPage,
    LiteratureBookPage,
    InspirationalBookPage,
    ViewProfilePage,
    RegistrationPage,
    UpdateProfilePage,
    DetailsPage,
    AddToCartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider
  ]
})
export class AppModule { }
