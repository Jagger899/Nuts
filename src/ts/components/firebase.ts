import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  getDoc,
  // getDocs,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";

export const firebaseWork = function () {
  const firebaseConfig = {
    apiKey: "AIzaSyBzs4tIXlRqpacvpaFOiNrHbDP87Yzq8Nc",
    authDomain: "nuts-8372a.firebaseapp.com",
    projectId: "nuts-8372a",
    storageBucket: "nuts-8372a.appspot.com",
    messagingSenderId: "272173015787",
    appId: "1:272173015787:web:f2fdd4af54fdc9d7d1d4ae",
    measurementId: "G-L1CKR36B5Q",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore();
  const specialOfTheDay = doc(firestore, "dailyspecial", "3");
  // const expensesCol = collection(db, 'users');
  async function writeDailySpecial() {
    const docData = {
      descr: "Vanilla late",
      price: 4.24,
      milk: "vhole",
      vegan: false,
    };

    try {
      await setDoc(specialOfTheDay, docData, { merge: true });
      console.log("collection was added");
    } catch (error) {
      console.log("i have an error");
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      return;
    }

    console.log(user);
  });

  const button = document.querySelector(".form__button");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  button?.addEventListener("click", (clickEvent) => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  });

  writeDailySpecial();
  console.log("hello firestore");

  const ordersCollection = collection(firestore, "orders");

  async function addNewDocument() {
    const newDoc = await addDoc(ordersCollection, {
      customer: "John",
      drink: "Latte",
      totalCost: (100 + Math.floor(Math.random() * 400)) / 100,
    });

    console.log(`your doc was added at ${newDoc.path}`);
  }

  addNewDocument();

  async function readSingleDocument() {
    const mySnapshot = await getDoc(specialOfTheDay);
    if (mySnapshot.exists) {
      const docData = mySnapshot.data();
      console.log(`my data is ${JSON.stringify(docData)}`);
      console.log(true);
    }
  }

  async function listenToADocument() {
    const mySnapshot = await getDoc(specialOfTheDay);
    if (mySnapshot.exists) {
      const docData = mySnapshot.data();
      console.log(` in realtime data is ${JSON.stringify(docData)}`);
      console.log(true);
    }
  }

  async function queryForDocuments() {
    const customerOrdersQuery = query(
      collection(firestore, "orders"),
      where("drink", "==", "Latte"),
      orderBy("price"),
      limit(10)
    );

    // const querySnapShot = await getDocs(customerOrdersQuery);
    onSnapshot(customerOrdersQuery, (querySnapsShot) => {
      // console.log(querySnapShot.query);
      // querySnapShot.forEach((snap) => {
      //   console.log(
      //     `Document ${snap.id} contains ${JSON.stringify(snap.data())}`
      //   );
      //   console.log("working function");
      // });

      console.log(JSON.stringify(querySnapsShot.docs.map((e) => e.data())));
    });
  }

  readSingleDocument();
  listenToADocument();
  queryForDocuments();
};

// const firebaseApp = initializeApp({

// })
