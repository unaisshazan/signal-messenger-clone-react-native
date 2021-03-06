  
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyC7HNVYM7QnPq-Il55fXeezGXwh-ZDMS24",
    authDomain: "signal-6b28d.firebaseapp.com",
    projectId: "signal-6b28d",
    storageBucket: "signal-6b28d.appspot.com",
    messagingSenderId: "574249221220",
    appId: "1:574249221220:web:fa2970880b761d7fd57371",
    measurementId: "G-44CSKP7ESH"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();
  
  export { db, auth };