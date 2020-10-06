import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { LandingComponent } from './landing/landing.component';
import {CommonModule} from "@angular/common";

const firebaseConfig = {
  apiKey: "AIzaSyAuv-nYgaJ9tsHouMm0JOFkFAK-QIaxexo",
  authDomain: "finiko-work.firebaseapp.com",
  databaseURL: "https://finiko-work.firebaseio.com",
  projectId: "finiko-work",
  storageBucket: "finiko-work.appspot.com",
  messagingSenderId: "91972320655",
  appId: "1:91972320655:web:bfcbc5e9122b909c141ffa",
  measurementId: "G-X6CEXZFLJC"
};


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
