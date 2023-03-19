import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCJ8RKBBLLjX7OwuRFHSO2gv9zf72NW5Ik",
  authDomain: "netflix-build-f3e64.firebaseapp.com",
  projectId: "netflix-build-f3e64",
  storageBucket: "netflix-build-f3e64.appspot.com",
  messagingSenderId: "139569542672",
  appId: "1:139569542672:web:8c49b603ce2eccd4f77c95",
};

//npm install -g firebase-tools

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


const auth = firebase.auth();

export { auth };
export default db;
