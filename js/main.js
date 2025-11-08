
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

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % total;
        track.style.transform = translateX(-${index * 100}%);
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + total) % total;
        track.style.transform = translateX(-${index * 100}%);
    });
});