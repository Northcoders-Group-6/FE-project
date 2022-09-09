// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQt0RrXWA5rG8Z_CbDN9h9YJrjxKfgKN8",
  authDomain: "voluntreats.firebaseapp.com",
  projectId: "voluntreats",
  storageBucket: "voluntreats.appspot.com",
  messagingSenderId: "395254601784",
  appId: "1:395254601784:web:13d85bf61d4b5f0d55eecd",
};

// const db = getFirestore(firebaseConfig);
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {});
export { auth };
