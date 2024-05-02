export const mobileMenuOpen = function (): void {
  const openMenu = document.querySelector('.open-menu');
  const closeMenu = document.querySelector(".mobile-menu__close");
  const mobileMenu = document.querySelector('.mobile-menu')

  openMenu.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu_active')
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove("mobile-menu_active");
  })
}