// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app



/**
 * REACT_APP_apiKey= AIzaSyCQ2T1bLipVARwYxy9k3TAl51SDFSjAx5M
REACT_APP_authDomain= doctors-portal-4cb88.firebaseapp.com
REACT_APP_projectId= doctors-portal-4cb88
REACT_APP_storageBucket= doctors-portal-4cb88.appspot.com
REACT_APP_messagingSenderId= 394029828677
REACT_APP_appId= 1:394029828677:web:43bcf225276144af59712c
 */