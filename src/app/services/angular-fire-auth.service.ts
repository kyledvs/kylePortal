import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';




import firebase from 'firebase/compat/app';
import { user } from 'rxfire/auth';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



@Injectable({
  providedIn: 'root'
})
export class AngularFireAuthService {


  authState = getAuth();







  constructor(
    public auth: AngularFireAuth
  ) { }

  signUp(userEmail: string, userPassword: string) {
    var email: string = userEmail;
    var password: string = userPassword;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }






  login(userEmail: string, userPassword: string) {
    var email: string = userEmail;
    var password: string = userPassword;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user)

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });

    this.onAuthStateChanged(this.authState)


  }

  AuthListen() {


  }

  onAuthStateChanged(authState: any) {
    if (authState) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = authState.uid;
      console.log("jtdjx", authState)
      // ...
    } else {
      // User is signed out
      // ...
    }
  };







  logout() {
    firebase.auth().signOut();
  }
}
