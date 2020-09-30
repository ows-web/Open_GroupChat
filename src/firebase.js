
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRZuLVQdzYlmyFHQYtOxcpyx4lcMIvO5o",
  authDomain: "whatsapp-f29df.firebaseapp.com",
  databaseURL: "https://whatsapp-f29df.firebaseio.com",
  projectId: "whatsapp-f29df",
  storageBucket: "whatsapp-f29df.appspot.com",
  messagingSenderId: "489810181160",
  appId: "1:489810181160:web:64c3c336b0e9e0efb9c91d",
  measurementId: "G-T4N90E4X2G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


