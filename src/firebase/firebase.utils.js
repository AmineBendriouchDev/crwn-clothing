import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD58qnBfgW4sUm65DX6eOpnFdR2bOJiZ9s',
  authDomain: 'crwn-db-59aa2.firebaseapp.com',
  databaseURL: 'https://crwn-db-59aa2.firebaseio.com',
  projectId: 'crwn-db-59aa2',
  storageBucket: 'crwn-db-59aa2.appspot.com',
  messagingSenderId: '621612491194',
  appId: '1:621612491194:web:4780e54b9c684353027d83',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
