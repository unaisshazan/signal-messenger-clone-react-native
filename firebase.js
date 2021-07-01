import * as firebase from "firebase";
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
if(firebase.app.length==0){
const firebaseApp = firebase.initializeApp(firebaseConfig);}
else{
  app = firebase.app();
}