import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAc_-6ofSGLCCF5pnwgMTe_bw43QXb3jW4",
  authDomain: "class-c26d1.firebaseapp.com",
  projectId: "class-c26d1",
  storageBucket: "class-c26d1.appspot.com",
  messagingSenderId: "300446490565",
  appId: "1:300446490565:web:4306f436c8e822ced4b5ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};