import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  collectionGroup,
} from "firebase/firestore";

export const cardFromFb = function () {
  const firebaseConfig = {
    apiKey: "AIzaSyBzs4tIXlRqpacvpaFOiNrHbDP87Yzq8Nc",
    authDomain: "nuts-8372a.firebaseapp.com",
    projectId: "nuts-8372a",
    storageBucket: "nuts-8372a.appspot.com",
    messagingSenderId: "272173015787",
    appId: "1:272173015787:web:f2fdd4af54fdc9d7d1d4ae",
    measurementId: "G-L1CKR36B5Q",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // const cardTitle = document.querySelectorAll(".card__title");

  async function getCollectionData(collectionName: string) {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => {
      console.log(doc.data());
      return doc.data();
    });

    return data;
  }

  getCollectionData("productCard");

  
  async function fillData() {
    const querySnapshot = await getDocs(collectionGroup(db, "productCard"));
    const cards = document.querySelectorAll(".card"); 
    let index = 0;
    querySnapshot.forEach((doc) => {
      if (index < cards.length) {
        
        const data = doc.data();
        const card = cards[index];

        card.querySelector(".card__title").textContent = data.productName;
        card.querySelector(".card__article").textContent = "Арт. " + "00" + data.arcticle;
        card.querySelector(".card__descr").textContent = data.description;
        const infoValues = card.querySelectorAll(".card__info-value");
        infoValues[0].textContent = data.weight + " г.";
        infoValues[1].textContent = data.package;
        card.querySelector(".card__price-number").textContent = data.price + " грн";

        index++;
      }
    });
  }

  fillData();
};
