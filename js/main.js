
function toggleMobileNav(){
  document.querySelector('.nav-links').classList.toggle('open');
}

function toggleForm(id){
  const form = document.getElementById(id);
  form.style.display = form.style.display === "block" ? "none" : "block";
}

document.querySelectorAll("[data-carousel]").forEach(carousel => {

  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextBtn = carousel.querySelector("[data-carousel-next]");
  const prevBtn = carousel.querySelector("[data-carousel-prev]");
  const dotsContainer = carousel.querySelector("[data-carousel-dots]");

  let index = 1;

  // Clona per scorrimento infinito
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const newSlides = Array.from(track.children);

  function setupCarousel() {
    const width = carousel.clientWidth;
    newSlides.forEach(slide => slide.style.width = `${width}px`);
    track.style.width = `${width * newSlides.length}px`;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  setupCarousel();
  window.addEventListener("resize", setupCarousel);

  /* Dots */
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    dotsContainer.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === (index - 1 + slides.length) % slides.length);
    });
  }

  function moveToSlide() {
    const width = carousel.clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
    track.style.transition = "transform 0.5s ease";
    updateDots();
  }

  track.addEventListener("transitionend", () => {
    if (newSlides[index] === firstClone) {
      index = 1;
      track.style.transition = "none";
      setupCarousel();
    }
    if (newSlides[index] === lastClone) {
      index = slides.length;
      track.style.transition = "none";
      setupCarousel();
    }
  });

  nextBtn?.addEventListener("click", () => { index++; moveToSlide(); });
  prevBtn?.addEventListener("click", () => { index--; moveToSlide(); });

  dotsContainer.querySelectorAll("button").forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i + 1;
      moveToSlide();
    });
  });

});

