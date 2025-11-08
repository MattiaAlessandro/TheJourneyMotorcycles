
function toggleMobileNav(){
  document.querySelector('.nav-links').classList.toggle('open');
}

function toggleForm(id){
  const form = document.getElementById(id);
  form.style.display = form.style.display === "block" ? "none" : "block";
}

 //* CAROUSEL MULTI-INSTANCE + SWIPE */
document.querySelectorAll("[data-carousel]").forEach(carousel => {

  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextBtn = carousel.querySelector("[data-carousel-next]");
  const prevBtn = carousel.querySelector("[data-carousel-prev]");

  let index = 0;
  const total = slides.length;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Pulsanti
  nextBtn?.addEventListener("click", () => {
    index = (index + 1) % total;
    update();
  });

  prevBtn?.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    update();
  });

  // SWIPE TOUCH
  let startX = 0;
  let moving = false;

  track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    moving = true;
  }, { passive: true });

  track.addEventListener("touchmove", e => {
    if (!moving) return;
    const diff = e.touches[0].clientX - startX;

    if (Math.abs(diff) > 60) {
      index = diff > 0 ? (index - 1 + total) % total : (index + 1) % total;
      update();
      moving = false;
    }
  }, { passive: true });

  track.addEventListener("touchend", () => { moving = false; });

  update();
});

