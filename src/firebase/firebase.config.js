import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDSswKj45BTw-aYMG4SVpSRRPjy5UKJUqM",
  authDomain: "thefoodzero-52183.firebaseapp.com",
  projectId: "thefoodzero-52183",
  storageBucket: "thefoodzero-52183.appspot.com",
  messagingSenderId: "529009058675",
  appId: "1:529009058675:web:1cf0c89d2088b0254f9b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);



// export { db, auth}
export { db }