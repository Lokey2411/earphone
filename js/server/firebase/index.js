import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: "AIzaSyC93XehhXHsL1fmxPyknM8QYnZU3GIoSyM",
	authDomain: "earphone-dbce8.firebaseapp.com",
	projectId: "earphone-dbce8",
	storageBucket: "earphone-dbce8.appspot.com",
	messagingSenderId: "219088556934",
	appId: "1:219088556934:web:2371607a1c227e25cfd207",
	measurementId: "G-V9NGPQD7HM",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const firestorePath = "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
export const firestore = getFirestore(firebase);
