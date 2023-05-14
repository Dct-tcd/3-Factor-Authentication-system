import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import firebase
import { useState,useEffect } from "react";
import { Route ,Router,Switch } from "react-router-dom";
import { getAuth, signInWithPhoneNumber} from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import SignIn from "./SignIn";
// import firebase from "firebase/";
// import firebase from '../config/compat/firebase';
export const Auth = () => {

  // const handleClick = () => {
  //   let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  //   let number = "+911234567890";
  //   firebase
  //     .auth()
  //     .signInWithPhoneNumber(number, recaptcha)
  //     .then((e) => {
  //       let code = prompt("enter otp");
  //       if (code == null) {
  //         return;
  //       }
  //       e.confirm(code).then((res) => {
  //         console.log(res, "................");
  //       });
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // };

  
return (
  <div id="recaptcha-container">
     <div id="recaptcha-container"></div>
        {/* <button onClick={handleClick}>Click Me</button> */}
  </div>
  );
};