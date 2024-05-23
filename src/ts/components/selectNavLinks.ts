export const selectNavLinks = function () {
  const navLinks = document.querySelectorAll(".nav__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // event.preventDefault();
      const attr = link.getAttribute("data-link");
      console.log(attr);
      navLinks.forEach((navLink) => {
        navLink.classList.remove("nav__link_active");
      });

      this.classList.add("nav__link_active");
      console.log(
        window.location.href.split("/")[
          window.location.href.split("/").length - 1
        ] === attr
      );

      // const currentLink =
      //   window.location.href.split("/")[
      //     window.location.href.split("/").length - 1
      //   ];

      // if (currentLink === attr) {
      //   navLinks.forEach((navLink) => {
      //     navLink.classList.remove("nav__link_active");
      //   });
      //   this.classList.add("nav__link_active");
      // }
    });
  });
};
