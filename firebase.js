import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAhR-0IsRo_Vds94xa98wAf2pR3fi0PFfg",
  authDomain: "udunkulu-396921.firebaseapp.com",
  projectId: "udunkulu-396921",
  storageBucket: "udunkulu-396921.appspot.com",
  messagingSenderId: "883841588465",
  appId: "1:883841588465:web:225477cd1c667c869a5d50"
};

  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app);

