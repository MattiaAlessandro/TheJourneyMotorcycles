function toggleMobileNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

function toggleForm(id) {
  const form = document.getElementById(id);
  if (form.classList.contains('open')) {
    form.classList.remove('open');
    setTimeout(() => {
      form.style.display = 'none';
    }, 800);
  } else {
    form.style.display = 'block';
    setTimeout(() => {
      form.classList.add('open');
    }, 10);
  }
}

document.querySelectorAll("[data-carousel]").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextBtn = carousel.querySelector("[data-carousel-next]");
  const prevBtn = carousel.querySelector("[data-carousel-prev]");

  let index = 0;

  function update() {
    const width = carousel.clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  window.addEventListener("resize", update);
  update();

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    update();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
});



/*Effetto di comparsa quando le sezioni entrano nel viewport*/

const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => {
  observer.observe(section);
});