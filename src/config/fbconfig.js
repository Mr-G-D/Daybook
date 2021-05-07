import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey:
    "AIzaSyAuJBRv_c7oQNXlblI50Rn2zff5OujVahs",
  authDomain:
    "evernote-clone-ff779.firebaseapp.com",
  projectId: "evernote-clone-ff779",
  storageBucket:
    "evernote-clone-ff779.appspot.com",
  messagingSenderId: "672429311348",
  appId:
    "1:672429311348:web:5441af535aef2e42f59821",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
