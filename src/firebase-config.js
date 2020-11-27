import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig =  {
  apiKey: "AIzaSyDVqAACR_OHHipPSnliAKC-61KlNbSkAuQ",
  authDomain: "vox-blog.firebaseapp.com",
  databaseURL: "https://vox-blog.firebaseio.com",
  projectId: "vox-blog",
  storageBucket: "vox-blog.appspot.com",
  messagingSenderId: "96052002749",
  appId: "1:96052002749:web:15609e55e3831695115cd4",
  measurementId: "G-L5L5ES64JD"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
 
// Utilizar el servicio de firestore para crear la base de datos
export const db = fb.firestore();
export const auth = fb;
