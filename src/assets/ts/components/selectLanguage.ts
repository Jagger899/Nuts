export function selectLanguageWorking() {
  const select = document.querySelectorAll(".select");
  const selectMenu = document.querySelectorAll(".select__menu");
  const selectItem = document.querySelectorAll(".select__menu-item");
  const selectSvg = document.querySelectorAll(".select__svg");
  const selectedText = document.querySelector(".select__text");

  select.forEach((item) => {
    item.addEventListener("click", () => {
      selectSvg.forEach((svg) => {
        svg.classList.toggle("select__svg_rotate");
      });
      selectMenu.forEach((menu) => {
        menu.classList.toggle("select__menu_open");
      });
    });
  });

  interface TextElement extends Element {
    innerText: string;
  }

  selectItem.forEach((option: TextElement) => {
    option.addEventListener("click", () => {
      selectedText.innerHTML = option.innerText;

      // selectMenu.classList.remove("select__menu_open");

      // selectSvg.classList.remove("select__svg-arrow_rotate");
      // selectSvg.forEach((svg) => {
      //   svg.classList.remove("select__svg_rotate");
      // });

      selectItem.forEach((option) => {
        option.classList.remove("select__menu-item_active");
      });
      option.classList.add("select__menu-item_active");
    });
  });
}
