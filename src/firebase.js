import firebase from "firebase/app";
import database from "firebase/database";

var config = {
  apiKey: "AIzaSyAOkuETOn7z3qeQKdGLLt9rphQTGyvk1Cw",
  authDomain: "swapnadeep-blog.firebaseapp.com",
  databaseURL: "https://swapnadeep-blog.firebaseio.com",
  projectId: "swapnadeep-blog",
  storageBucket: "swapnadeep-blog.appspot.com",
  messagingSenderId: "97145752769",
  appId: "1:97145752769:web:6cb64d7b2dfadb93f21840",
  measurementId: "G-090SDCQCGD"
};
// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  //   firebase.analytics();
  firebaseCache = firebase;
  return firebase;
};
