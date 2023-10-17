// Write your code here
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll("#slider img");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");

  function hideAllSlides() {
    slides.forEach((slide) => {
      slide.style.opacity = "0";
    });
  }

  function showSlide(index) {
    hideAllSlides();
    slides[index].style.opacity = "1";
    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Initially hide all slides except the first one
  hideAllSlides();
  slides[0].style.opacity = "1";

  // Automatically advance slides every 3 seconds
  setInterval(nextSlide, 3000);

});



