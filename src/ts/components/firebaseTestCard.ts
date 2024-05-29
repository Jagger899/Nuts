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

  // async function displayData() {
  //   const data = await getCollectionData("productCard");
  //   console.log(data);

  //   // interface cardInfo {
  //   //   productName: string;
  //   //   arcticle: number;
  //   //   description: string;
  //   //   weight: number;
  //   //   package: string;

  //   // }
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   data.forEach((item:any) => {

  //     const card = document.querySelector(".card");
  //     console.log(card);
  //     card.innerHTML = `

  //     <h3 class="card__title">${item.productName}</h3>
  //     <p class="card__article">${item.arcticle}</p>
  //     <p class="card__descr">${item.description}</p>
  //     <div class="card__info">
  //       <div class="card__info-box">
  //         <svg class="card__weight-svg">
  //           <use href="#weights"></use>
  //         </svg>
  //         <div class="card__info-block">
  //           <p class="card__info-annot">Масса:</p>
  //           <p class="card__info-value">${item.weight}</p>
  //         </div>
  //       </div>
  //       <div class="card__info-box">
  //         <svg class="card__package-svg">
  //           <use href="#bag"></use>
  //         </svg>
  //         <div class="card__info-block">
  //           <p class="card__info-annot">Упаковка</p>
  //           <p class="card__info-value">${item.package}</p>
  //         </div>
  //       </div>
  //     </div>
  //     <div class="card__payment">
  //       <div class="card__price-box">
  //         <p class="card__price">Цена:</p>
  //         <p class="card__price-number">${item.price}</p>
  //         <p class="card__price-old-number">${item.oldPrice}</p>
  //       </div>
  //       <a href="#" class="button button-green card__button">Купить</a>
  //     </div>
  //   `;

  //   });
  // }

  // displayData();

  // async function fillData() {
  //   const data = await getCollectionData("productCard");

  //   data.forEach((item) => {
  //     const cardTitle = document.querySelector(".card__title");
  //     const cardArticle = document.querySelector(".card__article");
  //     const cardDescr = document.querySelector(".card__descr");
  //     const cardInfoValue = document.querySelectorAll(".card__info-value");
  //     const cardPriceNumber = document.querySelector(".card__price-number");

  //     cardTitle.textContent = item.productName;
  //     cardArticle.textContent = "Aрт. " + item.arcticle;
  //     cardDescr.textContent = item.description;
  //     cardInfoValue[0].textContent = item.weight + " гр";
  //     cardInfoValue[1].textContent = item.package;
  //     cardPriceNumber.textContent = item.price + "грн";
  //   });
  // }

  // fillData();

  async function fillData() {
    const querySnapshot = await getDocs(collectionGroup(db, "productCard"));
    const cards = document.querySelectorAll(".card"); // предполагается, что у каждой карточки есть общий класс 'card'
    let index = 0;
    querySnapshot.forEach((doc) => {
      if (index < cards.length) {
        // проверяем, что есть карточка для этого документа
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
