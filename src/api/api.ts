import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD6Pp62mm55fC_CQ9UHq5UF82AfqnrULoA",
    authDomain: "test-chat-84785.firebaseapp.com",
    projectId: "test-chat-84785",
    storageBucket: "test-chat-84785.appspot.com",
    messagingSenderId: "839627045093",
    appId: "1:839627045093:web:274c6cea5292556feffc0c",
    measurementId: "G-CGBJ0B6750"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();