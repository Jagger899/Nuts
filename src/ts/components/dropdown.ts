export const dropdownWork = function () {
  const dropdown = document.querySelectorAll(".dropdown__drop-box ");
  const dropdownMenu = document.querySelectorAll(".dropdown__menu");
  let intervalId;

  dropdown.forEach((element) => {
    element.addEventListener("click", (ev) => {
      const menu = (ev.currentTarget as HTMLElement).dataset.path;
      const opMenu = document.querySelector(`[data-target=${menu}]`);
      // console.log(menu);
      element.classList.remove('dropdown__menu_active')
      dropdownMenu.forEach(() => {
        if (!opMenu.classList.contains('dropdown__menu_active')) {
          
         intervalId =  setTimeout(() => {
            opMenu.classList.add('dropdown__menu_active');
          },0)
          
        } 

        if (opMenu.classList.contains("dropdown__menu_active")) {
          clearTimeout(intervalId);

          intervalId = setTimeout(() => {
            opMenu.classList.remove('dropdown__menu_active');
          },0)
          
        }
      })

      window.onclick = (event) => {
        if (event.target === opMenu) {
          return;
        } else {
          opMenu.classList.remove('dropdown__menu_active');
        }
      }
    })
  })
}