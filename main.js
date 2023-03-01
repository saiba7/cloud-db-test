// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjzX0e1XTXj0FdJHCc4iW6xNKCU3lME_M",
  authDomain: "lithe-realm-379307.firebaseapp.com",
  projectId: "lithe-realm-379307",
  storageBucket: "lithe-realm-379307.appspot.com",
  messagingSenderId: "750947401451",
  appId: "1:750947401451:web:425850c741b83db79e88ae",
  measurementId: "G-Z14XTK08H9",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colReg = collection(db, "test");

// get collection data
getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs);
});
