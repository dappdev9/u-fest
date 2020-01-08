import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { authState } from 'rxfire/auth';
import { collectionData } from 'rxfire/firestore';
import { map } from 'rxjs/operators';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAvYU9imMeR46L1sD2D6RN5B0DsebkUn8E",
  authDomain: "ufestonline.firebaseapp.com",
  databaseURL: "https://ufestonline.firebaseio.com",
  projectId: "ufestonline",
  storageBucket: "ufestonline.appspot.com",
  messagingSenderId: "1005349749448",
  appId: "1:1005349749448:web:1148d894e2041bc0f95bfd"
});

const firestore = firebase.firestore(app);
const auth = firebase.auth(app);
const loggedIn$ = authState(auth).pipe(map(user => (user ? user : null)));

export { app, auth, firestore, collectionData, loggedIn$ };

export default firebase;