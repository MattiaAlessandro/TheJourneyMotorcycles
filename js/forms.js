// Google Apps Script Web App URLs
const NEWSLETTER_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySdknPVeSmVXkVdJFsM-tT6EElQgM8f2qJoqhvUt7fxtuY564N1vykhv29mYwoX-t2lQ/exec';
const TRIPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx-x6CoGAPqu1LR0En49_8SdRYktLLbEE9bfLSmWdLUo7QpRdVup8i4L26ALtp29AQx/exec';


// === NEWSLETTER FORM ===
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(newsletterForm);
    const data = {
      nome: formData.get('name'),
      email: formData.get('email'),
      moto: formData.get('moto'),
      privacy: formData.get('privacy'),
      timestamp: new Date().toLocaleString('it-IT')
    };

    try {
      await fetch(NEWSLETTER_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      alert('Grazie per esserti iscritto/a alla newsletter!');
      newsletterForm.reset();
    } catch (error) {
      console.error('Errore:', error);
      alert('Si è verificato un errore. Riprova più tardi.');
    }
  });
}


// === TRIP (PROSSIME USCITE) FORM ===
const tripForms = document.querySelectorAll('.trip-form');
tripForms.forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const uscita = formData.get('destinazione') || form.getAttribute('data-trip') || 'Non specificato';

    const data = {
      nome: formData.get('nome'),
      moto: formData.get('moto'),
      telefono: formData.get('telefono'),
      uscita: uscita,
      privacy: formData.get('privacy') ? 'Sì' : 'No',
      timestamp: new Date().toLocaleString('it-IT')
    };

    try {
      await fetch(TRIPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      alert(`Grazie per esserti iscritto/a all’uscita di ${uscita}!`);
      form.reset();
      document.getElementById('formOverlay').style.display = 'none';
    } catch (error) {
      console.error('Errore:', error);
      alert('Errore durante l’invio. Riprova più tardi.');
    }
  });
});


// === POPUP NEWSLETTER HANDLER ===
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openNewsletterForm");
  const modal = document.getElementById("newsletterModal");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => modal.classList.add("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
});

