import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAQ8UOQLlX4aeFSJkCX_aryrtNkJU-ch8s",
  authDomain: "netflix-beed6.firebaseapp.com",
  projectId: "netflix-beed6",
  storageBucket: "netflix-beed6.appspot.com",
  messagingSenderId: "82161714775",
  appId: "1:82161714775:web:b8b2d89bc945ff78b98512"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;