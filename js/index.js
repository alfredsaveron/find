const mobileMenu = document.querySelector(".mobile-menu");

const mobileMenuToggle = document.querySelector(".toggle");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
