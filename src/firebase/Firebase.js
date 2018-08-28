import firebase from 'firebase/app';
import 'firebase/database';
//import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhM40Nt7Am0Bhxe5ANrMbewmUOVtHi-w8",
    authDomain: "react-firebase-1bb22.firebaseapp.com",
    databaseURL: "https://react-firebase-1bb22.firebaseio.com",
    projectId: "react-firebase-1bb22",
    storageBucket: "react-firebase-1bb22.appspot.com",
    messagingSenderId: "773584910935"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const db = firebase.database();
//export const auth = firebase.auth();

export { db };