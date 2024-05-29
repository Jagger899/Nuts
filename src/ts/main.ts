import { selectLanguageWorking } from "./components/selectLanguage";
import { selectNavLinks } from "./components/selectNavLinks";
import { mobileMenuOpen } from "./components/mobileMenu";
import { mouseOverImg } from "./components/card";
import { mainSwiperWork } from "./components/swiper";
import { infoSwiperWork } from "./components/info-swiper";
import { newsSwiperWork } from "./components/news-swiper";
import { promoVideoPlay } from "./components/promoVideo";
// import { firebaseWork } from "./components/firebase";
import { cardFromFb } from "./components/firebaseTestCard";

// import { googleMaps } from "./components/googleMap";
// import { benefitCardOverlay } from "./components/benefitCardOverlay";

document.addEventListener("DOMContentLoaded", function () {
  selectLanguageWorking();
  selectNavLinks();
  mobileMenuOpen();
  mainSwiperWork();
  mouseOverImg();
  infoSwiperWork();
  newsSwiperWork();
  promoVideoPlay();
  cardFromFb();
  // firebaseWork();
  // googleMaps();
  // benefitCardOverlay();
});

// window.addEventListener("click", function (e) {
//   const targetElement = e.target as HTMLElement;

//   if (targetElement.tagName === "a") {
//     e.preventDefault();
//     const url = targetElement.getAttribute("href") as unknown as HTMLElement;
//     window.history.pushState(null, null, url);

//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         document.querySelector(".content").innerHTML = xhr.responseText;
//       } else {
//         console.error("Request failed.  Returned status of " + xhr.status);
//       }
//     };
//     xhr.send();
//   }
// });
