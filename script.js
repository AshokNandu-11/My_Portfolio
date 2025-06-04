// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const mobileNav = document.getElementById("mobile-nav");

  menuIcon.addEventListener("click", function () {
    // Toggle visibility class
    mobileNav.classList.toggle("d-none");
  });
});
