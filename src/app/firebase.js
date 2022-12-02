// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDguZ5v_s2L4LAhntEfQ7XvjLqbgtlAJIE",
    authDomain: "loginapp-dcbbb.firebaseapp.com",
    projectId: "loginapp-dcbbb",
    storageBucket: "loginapp-dcbbb.appspot.com",
    messagingSenderId: "589183707410",
    appId: "1:589183707410:web:e7b313f13a7ba6ad75abcb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)