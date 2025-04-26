let index = 0;
let autoSlideInterval;
let autoSlidePaused = false;

const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

const activePortfolio = () => {
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  portfolioDetails.forEach(details => details.classList.remove('active'));
  portfolioDetails[index].classList.add('active');

  arrowLeft.classList.toggle('disabled', index === 0);
  arrowRight.classList.toggle('disabled', index === portfolioDetails.length - 1);
};

const nextSlide = () => {
  index = (index + 1) % portfolioDetails.length;
  activePortfolio();
};

const startAutoSlide = () => {
  clearInterval(autoSlideInterval); // clears any old interval first
  autoSlideInterval = setInterval(nextSlide, 5000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlidePaused = true;

  // Resume after 10 seconds
  setTimeout(() => {
    autoSlidePaused = false;
    startAutoSlide();
  }, 10000);
};

// Event listeners for arrow buttons
arrowRight.addEventListener('click', () => {
  if (index < portfolioDetails.length - 1) {
    index++;
    activePortfolio();
    stopAutoSlide();
  }
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    activePortfolio();
    stopAutoSlide();
  }
});


activePortfolio();
startAutoSlide();
