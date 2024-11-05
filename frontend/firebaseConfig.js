// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw7V86NeRV63Cj6PSVJ8cw-OkRCzjI_co",
  authDomain: "employee-reg-79927.firebaseapp.com",
  projectId: "employee-reg-79927",
  storageBucket: "employee-reg-79927.appspot.com",
  messagingSenderId: "213191159421",
  appId: "1:213191159421:web:1e39fa1bf26fac25160b14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
export { auth, provider, storage };
