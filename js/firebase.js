
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6c2O9KUgThcXr-k2CnnaFRPChw1oog08",
  authDomain: "blogspotdata-8e6c9.firebaseapp.com",
  projectId: "blogspotdata-8e6c9",
  storageBucket: "blogspotdata-8e6c9.firebasestorage.app",
  messagingSenderId: "1012768920380",
  appId: "1:1012768920380:web:1402f4e8c6f3f5f1c14439",
  measurementId: "G-YQYH902HY7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// GLOBAL EXPORTS
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.deleteDoc = deleteDoc;
window.doc = doc;
window.updateDoc = updateDoc;
window.getDoc = getDoc;
window.setDoc = setDoc;
