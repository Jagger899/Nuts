export const selectNavLinks = function () {
  const navLinks = document.querySelectorAll(".nav__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navLinks.forEach((navLink) => {
        navLink.classList.remove("nav__link_active");
      });

      link.classList.add("nav__link_active");
    });
  });
};
