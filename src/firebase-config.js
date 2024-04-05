import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDndRtLzxMSQSwU7ixw9PBxYbopwbAcyrI",
    authDomain: "mynetflix-16c94.firebaseapp.com",
    projectId: "mynetflix-16c94",
    storageBucket: "mynetflix-16c94.appspot.com",
    messagingSenderId: "403364827653",
    appId: "1:403364827653:web:50c687db9a9d27e7b4c26c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };


