import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firbase.config";


const initializeFirebase =()=>{
    initializeApp(firebaseConfig);
}

export default initializeFirebase;