// Import the functions you need from the SDKs you need
import { firebaseConfig } from "../firebaseSecret.js";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getTestData() {
  const testCol = collection(db, "test");
  const testSnapshot = await getDocs(testCol);
  const testList = testSnapshot.docs.map((doc) => {
    console.log(doc);
    return doc.data();
  });
  return testList;
}

//console.log(getTestData(db));

export async function setTestData(dataToSet) {
  const testColData = doc(db, "test", dataToSet);
  setDoc(testColData, { merge: true });
}
/*const colRef = collection(db, "test");

// get collection data
getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs);
});*/
