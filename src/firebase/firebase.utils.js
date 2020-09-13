import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAvbit3KuIhYqB505V7eAXKEpynms7WFww",
  authDomain: "ecommerce-project-9492b.firebaseapp.com",
  databaseURL: "https://ecommerce-project-9492b.firebaseio.com",
  projectId: "ecommerce-project-9492b",
  storageBucket: "ecommerce-project-9492b.appspot.com",
  messagingSenderId: "921305661745",
  appId: "1:921305661745:web:27762b723d930bf3e2b010",
  measurementId: "G-QBZC9CYFDW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
