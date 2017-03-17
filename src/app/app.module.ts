import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { AddListingsComponent } from './components/add-listings/add-listings.component';
import { EditListingsComponent } from './components/edit-listings/edit-listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import {FirebaseService} from './service/firebase.service';

export const firebaseConfig = {
    apiKey: "AIzaSyCtijB47BeST5bOgkBgv12tyvb54qBFPdA",
    authDomain: "proplisting-4727a.firebaseapp.com",
    databaseURL: "https://proplisting-4727a.firebaseio.com",
    storageBucket: "proplisting-4727a.appspot.com",
    messagingSenderId: "406796120883"
  };

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};


const appRoutes:Routes=[
{
  path:'',
  component:HomeComponent

},
{
  path:'listings',
  component:ListingsComponent

}
,
{
  path:'add-listings',
  component:AddListingsComponent

}
]



@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    ListingsComponent,
    AddListingsComponent,
   
    EditListingsComponent,
   
    NavbarComponent,
   
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
