import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDPI98GuBePDu8JaBI-i7-BZpCllAVqP4s",
    authDomain: "resell-camera.firebaseapp.com",
    projectId: "resell-camera",
    storageBucket: "resell-camera.appspot.com",
    messagingSenderId: "522119866006",
    appId: "1:522119866006:web:80a199210933a8d73b84b7"
};

const app = initializeApp(firebaseConfig);
export default app