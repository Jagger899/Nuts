import { selectLanguageWorking } from "./components/selectLanguage";
import { selectNavLinks } from "./components/selectNavLinks";
import { mobileMenuOpen } from "./components/mobileMenu";
import { mouseOverImg } from "./components/card";
import { mainSwiperWork } from "./components/swiper";
import { infoSwiperWork } from "./components/info-swiper";
// import { benefitCardOverlay } from "./components/benefitCardOverlay";

document.addEventListener("DOMContentLoaded", function () {
  selectLanguageWorking();
  selectNavLinks();
  mobileMenuOpen();
  mainSwiperWork();
  mouseOverImg();
  infoSwiperWork();
  // benefitCardOverlay();
});


