import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCkmayknOfV4Wsj8YwbZo96ZNiU7AY4QTU',
  authDomain: 'clothing-shop-9835f.firebaseapp.com',
  projectId: 'clothing-shop-9835f',
  storageBucket: 'clothing-shop-9835f.appspot.com',
  messagingSenderId: '82120294684',
  appId: '1:82120294684:web:cd7eff161f76d1dbf37ad9',
  measurementId: 'G-6P6HE18XV9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
