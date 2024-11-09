import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmVYFzDPh0T6Oeow8pyoTAD0k9_kCsrXs",
    authDomain: "project-3afab.firebaseapp.com",
    projectId: "project-3afab",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
