import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ4yqGRr_6XvJ8VsxmC8FFPLhhtGUacCA",
  authDomain: "twitter-clone-a0e4c.firebaseapp.com",
  projectId: "twitter-clone-a0e4c",
  storageBucket: "twitter-clone-a0e4c.appspot.com",
  messagingSenderId: "828284245593",
  appId: "1:828284245593:web:1892abdd26f1d5e7154348",
  measurementId: "G-B2MR7DDPWH"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;