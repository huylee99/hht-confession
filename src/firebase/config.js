import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDa5N_jExoD-fRtHB4MCNpZZNTpdmn8azM',
  authDomain: 'hht-confession.firebaseapp.com',
  projectId: 'hht-confession',
  storageBucket: 'hht-confession.appspot.com',
  messagingSenderId: '989574852698',
  appId: '1:989574852698:web:5545784681acbee6ba6863',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const adminAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, adminAuth, timestamp };
