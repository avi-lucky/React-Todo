import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBiw5earGkEMD0rbKlnjaISSs6CSzhUTXA",
  authDomain: "react-todo-8adb7.firebaseapp.com",
  projectId: "react-todo-8adb7",
  storageBucket: "react-todo-8adb7.appspot.com",
  messagingSenderId: "341670164251",
  appId: "1:341670164251:web:5a8e99c2e9cda2750405be",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase)

export { firebase, db };
