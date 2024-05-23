// console.log(window.location.href.split("/")[window.location.href.split("/").length - 1]);

import { selectLanguageWorking } from "./components/selectLanguage";
import { selectNavLinks } from "./components/selectNavLinks";
import { mobileMenuOpen } from "./components/mobileMenu";
import { mouseOverImg } from "./components/card";
import { mainSwiperWork } from "./components/swiper";
import { infoSwiperWork } from "./components/info-swiper";
import { newsSwiperWork } from "./components/news-swiper";
import { promoVideoPlay } from "./components/promoVideo";
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
  // googleMaps();
  // benefitCardOverlay();
});
