
function toggleMobileNav(){
  document.querySelector('.nav-links').classList.toggle('open');
}

function toggleForm(id){
  const form = document.getElementById(id);
  form.style.display = form.style.display === "block" ? "none" : "block";
}

 /* CAROUSEL */
const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const nextBtn = carousel.querySelector("[data-carousel-next]");
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    
    let index = 0;
    const slides = track.children;
    const total = slides.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % total;
        track.style.transform = `translateX(-${index * 100}%)`;
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + total) % total;
        track.style.transform = `translateX(-${index * 100}%)`;
    });

    // blocca trascinamento immagini (evita glitch)
    slides.forEach(img => img.setAttribute("draggable", "false"));
});

/* Swipe touch support */
document.querySelectorAll("[data-carousel]").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const total = slides.length;

    let index = 0;
    let startX = 0;
    let currentX = 0;
    let moving = false;

    function update() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    // Start swipe
    track.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
        moving = true;
    }, { passive: true });

    // Track swipe movement
    track.addEventListener("touchmove", e => {
        if (!moving) return;
        currentX = e.touches[0].clientX;

        const diff = currentX - startX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                index = (index - 1 + total) % total;
            } else {
                index = (index + 1) % total;
            }
            update();
            moving = false;
        }
    }, { passive: true });

    track.addEventListener("touchend", () => {
        moving = false;
    });

    update();
});