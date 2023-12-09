// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtj4ImexsmBSpCh_zPFR1Aw47syUUzR3E",
  authDomain: "moha-milon-5ebf7.firebaseapp.com",
  projectId: "moha-milon-5ebf7",
  storageBucket: "moha-milon-5ebf7.appspot.com",
  messagingSenderId: "511575449575",
  appId: "1:511575449575:web:c5439cf30f5769af15a742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;