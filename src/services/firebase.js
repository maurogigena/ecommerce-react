// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";

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
const db = getFirestore(app);

export const getProducts = async () =>{
    const productsCollectionRef = collection(db,"products");
    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map(docu =>{
        return {...docu.data() , id : docu.id}
    })
    return docsData
}

export const getProductsByCategory = async (categoryToSearch) =>{
     const productsCollectionRef = collection(db, "products");
     const queryCollection = query(
			productsCollectionRef,
			where("category", "==", categoryToSearch)
		);
    const snapshot = await getDocs(queryCollection);
     const docsData = snapshot.docs.map((docu) => {
			return { ...docu.data(), id: docu.id };
		});
		return docsData;
}

export const getOneProduct = async (idToSearch) => {
    const productsCollectionRef = collection(db, "products");
    const productRef = doc(productsCollectionRef, idToSearch);
    const snapshot = await getDoc(productRef);
    return { ...snapshot.data(), id: snapshot.id };
};

export const createBuyOrder = async (order) => {
    const ordersCollectionRef = collection(db, "orders");
    const orderDocRef = await addDoc(ordersCollectionRef, order);
    return orderDocRef.id;
};

export const createSubscriber = async (email) => {
    const subscribersCollectionRef = collection(db, "subscribers");
    await addDoc(subscribersCollectionRef, { email });
  };
  