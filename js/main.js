
function toggleMobileNav(){
  document.querySelector('.nav-links').classList.toggle('open');
}

function toggleForm(id){
  const form = document.getElementById(id);
  form.style.display = form.style.display === "block" ? "none" : "block";
}

/* CAROUSEL MULTI-INSTANCE + SWIPE */
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

  nextBtn?.addEventListener("click", () => {
    index = (index + 1) % total;
    update();
  });

  prevBtn?.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    update();
  });

  // Swipe Mobile
  let startX = 0;
  track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) prevBtn.click();
    if (diff < -50) nextBtn.click();
  }, { passive: true });

  update();
});

