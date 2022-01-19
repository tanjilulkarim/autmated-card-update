import { initializeApp } from "firebase/app";

const firebaseInitialize =() => initializeApp({

    apiKey: "AIzaSyB5T8f8USEHi57fjDXoLwwBFwgrWWCCqaA",
  
    authDomain: "robograding.firebaseapp.com",
  
    projectId: "robograding",
  
    storageBucket: "robograding.appspot.com",
  
    messagingSenderId: "439895051989",
  
    appId: "1:439895051989:web:af8cb06bb87be6b9e51c5c"
  
});

export default firebaseInitialize;