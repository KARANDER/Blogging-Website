import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA3FAuTYok3XfYLNmi1I63cjxXZGT8RMDY",
    authDomain: "blogging-website-ef3c0.firebaseapp.com",
    projectId: "blogging-website-ef3c0",
    storageBucket: "blogging-website-ef3c0.appspot.com",
    messagingSenderId: "404527082932",
    appId: "1:404527082932:web:78c43cc2bacc5ad91a56e1"
  };

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}