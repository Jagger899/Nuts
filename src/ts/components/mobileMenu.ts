export const mobileMenuOpen = function (): void {
  const openMenu = document.querySelector(".open-menu");
  const closeMenu = document.querySelector(".mobile-menu__close");
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.querySelector('.body');
  // const header = document.querySelector(".header");

  // window.addEventListener("scroll", function () {
  //   if (this.window.scrollY > 0) {
  //     header.classList.add("header_white");
  //   } else {
  //     header.classList.remove("header_white");
  //   }
  // });

  openMenu.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu_active");
    body.classList.add('body_lock');
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu_active");
    body.classList.remove("body_lock");
  });
};
