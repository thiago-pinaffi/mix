(function(){
    
})(window)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase, ref, set } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA--ucC-jJHBdEl8DAS7mHbh0sYx2qMiZ4",
  authDomain: "mixtest-d4075.firebaseapp.com",
  databaseURL: "https://mixtest-d4075-default-rtdb.firebaseio.com",
  projectId: "mixtest-d4075",
  storageBucket: "mixtest-d4075.appspot.com",
  messagingSenderId: "1013766674801",
  appId: "1:1013766674801:web:67abb1c68a18b6e18ffed0",
  measurementId: "G-BT9J0D4H7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function writeUserData(UserId, name, email){
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  set(reference, {
    username: name,
    emial: email
  });
}

writeUserData("thiagospinaffi", "pinaffi", "thiagospinaffi@gmail.com")