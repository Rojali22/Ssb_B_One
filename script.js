document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu untuk mobile
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // Jalankan Particles.js jika library tersedia
  if (typeof particlesJS !== 'undefined') {
    particlesJS.load('particles-js', 'particles-config.json', function () {
      console.log('particles.js loaded');
    });
  }
});
