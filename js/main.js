(function () {
  // Navbar Auto collapse on anchor click
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("a[href^='#']");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          const navbarHeight = document.querySelector(".navbar").offsetHeight;
          const targetPosition = target.offsetTop - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });

          if (typeof bootstrap !== 'undefined' && navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).hide();
          }
        }
      });
    });
  });

  // Bootstrap Intro Carousel
  const introCarouselEl = document.getElementById('introCarousel');
  if (introCarouselEl && typeof bootstrap !== 'undefined') {
    new bootstrap.Carousel(introCarouselEl, {
      interval: 3000,
      pause: "hover"
    });
  }

  // Review Auto Scroll Slider
  const slider = document.getElementById('reviewSlider');
  if (slider) {
    function autoScrollSlider() {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const cardWidth = 310;

      let scrollLeft = slider.scrollLeft + cardWidth;
      if (scrollLeft >= maxScrollLeft) {
        scrollLeft = 0;
      }

      slider.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }

    setInterval(autoScrollSlider, 3000);
  }
})();
