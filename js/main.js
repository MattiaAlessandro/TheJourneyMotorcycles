
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

  // Crea cloni per infinito
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = Array.from(track.children);
  let index = 1;

  function setWidths() {
    const width = carousel.clientWidth;

    allSlides.forEach(slide => {
      slide.style.width = `${width}px`;
    });

    track.style.width = `${width * allSlides.length}px`;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  // Inizializzazione
  setWidths();
  window.addEventListener("resize", setWidths);

  // Pallini (dots)
  dotsContainer.innerHTML = "";
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

  function move() {
    const width = carousel.clientWidth;
    track.style.transition = "transform 0.45s ease";
    track.style.transform = `translateX(-${index * width}px)`;
  }

  track.addEventListener("transitionend", () => {
    const width = carousel.clientWidth;
    track.style.transition = "none";

    if (allSlides[index] === firstClone) index = 1;
    if (allSlides[index] === lastClone) index = slides.length;

    track.style.transform = `translateX(-${index * width}px)`;
    updateDots();
  });

  nextBtn?.addEventListener("click", () => {
    index++;
    move();
  });

  prevBtn?.addEventListener("click", () => {
    index--;
    move();
  });

  dotsContainer.querySelectorAll("button").forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i + 1;
      move();
    });
  });

});