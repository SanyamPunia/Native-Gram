import fb from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDy0Z5-MaoqcnBVY-IKkzUAYNwhxN7a7Do",
  authDomain: "expo-ig-clone.firebaseapp.com",
  projectId: "expo-ig-clone",
  storageBucket: "expo-ig-clone.appspot.com",
  messagingSenderId: "642284103161",
  appId: "1:642284103161:web:53b5e014082fa78c854928",
  measurementId: "G-QWC7QKMFX4",
};

export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app();
