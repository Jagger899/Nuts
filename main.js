// import "./src/assets/six.scss";
// import imgUrl from "./src/assets/images/main-1.png";

// const image = document.getElementById('image');

// image.src = imgUrl;

// const modules = import.meta.glob("./src/10/*.js", {import:'name'});
// console.log(modules);

// document.addEventListener("click", () => {
//   Object.values(modules).forEach((module) => {
//     module().then((name) => {
//       console.log(name);
//     });
//   });
// });

// import { template } from "./src/jsxLesson";

// document.querySelector('#app').appendChild(template);

// console.log(import.meta.env)

// import './src/assets/scss/main.scss';

const select = document.querySelector(".select");
const selectMenu = document.querySelector(".select__menu");
const selectItem = document.querySelectorAll(".select__menu-item");
const selectSvg = document.querySelector(".select__svg");
const selectedText = document.querySelector(".select__text");

select.addEventListener("click", () => {
  selectSvg.classList.toggle("select__svg_rotate");
  selectMenu.classList.toggle("select__menu_open");
});

selectItem.forEach((option) => {
  option.addEventListener("click", () => {
    selectedText.innerText = option.innerText;

    // selectMenu.classList.remove("select__menu_open");

    selectSvg.classList.remove("select__svg-arrow_rotate");

    selectItem.forEach((option) => {
      option.classList.remove("select__menu-item_active");
    });
    option.classList.add("select__menu-item_active");
  });
});
