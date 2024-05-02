// import { selectLanguageWorking } from "./src/assets/js/components/selectLanguage";
import { selectLanguageWorking } from "./src/assets/ts/components/selectLanguage";
import { selectNavLinks } from "./src/assets/ts/components/selectNavLinks";
import { mobileMenuOpen } from "./src/assets/ts/components/mobileMenu";

// type Props = {}

// export default function main({}: Props) {
//   return (
//     <div>main</div>
//   )
// }/components/selectLanguage";
// import { selectNavLinks } from "./src/assets/import React from 'react'

// type Props = {}

// export default function main({}: Props) {
//   return (
//     <div>main</div>
//   )
// }/components/selectNavLinks";

document.addEventListener("DOMContentLoaded", function () {
  selectLanguageWorking();
  selectNavLinks();
  mobileMenuOpen();
});

// const navLinks = document.querySelectorAll(".nav__link");

// navLinks.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();
//     navLinks.forEach((navLink) => {
//       navLink.classList.remove("nav__link_active");
//     });

//     link.classList.add("nav__link_active");
//   });
// });
