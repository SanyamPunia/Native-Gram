import fb from "firebase/app";

const firebaseConfig = {
  apiKey: "---",
  authDomain: "---",
  projectId: "---",
  storageBucket: "---",
  messagingSenderId: "---",
  appId: "---",
  measurementId: "---",
};

export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app();
