import { selectLanguageWorking } from "./components/selectLanguage";
import { selectNavLinks } from "./components/selectNavLinks";
import { mobileMenuOpen } from "./components/mobileMenu";
import { promoVideoPlay } from "./components/promoVideo";
import { tabsWork } from "./components/tabs";
import { infoSwiperWork } from "./components/info-swiper";
import { newsSwiperWork } from "./components/news-swiper";

document.addEventListener("DOMContentLoaded", function () {
  selectLanguageWorking();
  selectNavLinks();
  mobileMenuOpen();
  promoVideoPlay();
  tabsWork();
  infoSwiperWork();
  newsSwiperWork();
});
