import { firebase } from '@firebase/app';
// Required for side-effects
require("firebase/firestore");


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWsSt2PucyCbLdR-BKL9Ne6NtaX2yQhs0",
  authDomain: "volkslift-ph.firebaseapp.com",
  databaseURL: "https://volkslift-ph.firebaseio.com",
  projectId: "volkslift-ph",
};
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  // Get a reference to the database service
  const db = firebase.firestore();

export { db };

  // storageBucket: "volkslift-ph.appspot.com",
  // messagingSenderId: "117626137770",
  // appId: "1:117626137770:web:30645db93c94155a59b4d3",
  // measurementId: "G-HYJ6SHSE4P"