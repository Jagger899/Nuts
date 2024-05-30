import { selectLanguageWorking } from "./components/selectLanguage";
import { selectNavLinks } from "./components/selectNavLinks";
import { mobileMenuOpen } from "./components/mobileMenu";
import { promoVideoPlay } from "./components/promoVideo";
import { tabsWork } from "./components/tabs";

document.addEventListener("DOMContentLoaded", function () {
  selectLanguageWorking();
  selectNavLinks();
  mobileMenuOpen();
  promoVideoPlay();
  tabsWork();
  
});
