// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRMqGQ1Xvt4Fy_QMxXSf-tSF-rceCjmG0",
  authDomain: "livechat-test123.firebaseapp.com",
  databaseURL: "https://livechat-test123-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "livechat-test123",
  storageBucket: "livechat-test123.firebasestorage.app",
  messagingSenderId: "257544943213",
  appId: "1:257544943213:web:b5b35aacc3cda5fcaf7164",
  measurementId: "G-L0H5NGSXMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);