import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3l_FSnqvnt6iUZnq-8aCtrQ1Z4gZ6S5M",
  authDomain: "hood-99.firebaseapp.com",
  projectId: "hood-99",
  storageBucket: "hood-99.appspot.com",
  messagingSenderId: "519478584834",
  appId: "1:519478584834:web:253c88f2bbba44f93ca91b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app)

export const getProducts = async () => (
    const productsCollectionRef = collection(db,"products");
    const snapshot = await getDocs (productsCollectionRef);
    const docsData = snapshot.docs.map(docu => {
        return {...docu.data() , id : docu.id}
    })
    return docsData
)