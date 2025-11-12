// Google Apps Script Web App URLs
const NEWSLETTER_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySdknPVeSmVXkVdJFsM-tT6EElQgM8f2qJoqhvUt7fxtuY564N1vykhv29mYwoX-t2lQ/exec';
const TRIPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx-x6CoGAPqu1LR0En49_8SdRYktLLbEE9bfLSmWdLUo7QpRdVup8i4L26ALtp29AQx/exec';

// Newsletter form handler
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(newsletterForm);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      privacy: formData.get('privacy') ? 'Sì' : 'No',
      timestamp: new Date().toLocaleString('it-IT')
    };
    
    try {
      const response = await fetch(NEWSLETTER_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
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

// Trip forms handler
const tripForms = document.querySelectorAll('.trip-form');
tripForms.forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const tripName = form.getAttribute('data-trip');
    
    const data = {
      nome: formData.get('nome'),
      moto: formData.get('moto'),
      telefono: formData.get('telefono'),
      uscita: tripName,
      privacy: formData.get('privacy') ? 'Sì' : 'No',
      timestamp: new Date().toLocaleString('it-IT')
    };
    
    try {
      const response = await fetch(TRIPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      alert('Grazie per la tua iscrizione! Ti contatteremo presto.');
      form.reset();
      form.classList.remove('open');
    } catch (error) {
      console.error('Errore:', error);
      alert('Si è verificato un errore. Riprova più tardi.');
    }
  });
});


// Prossime handler (added)
document.addEventListener("DOMContentLoaded", function() {
  const prossimeForm = document.getElementById("prossimeForm");
  const message = document.getElementById("message-prossime");
  if (prossimeForm) {
    prossimeForm.addEventListener("submit", async function(e) {
      e.preventDefault();
      message.textContent = "Invio in corso...";
      try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbx-x6CoGAPqu1LR0En49_8SdRYktLLbEE9bfLSmWdLUo7QpRdVup8i4L26ALtp29AQx/exec", { method: "POST", body: new FormData(prossimeForm) });
        if (res.ok) {
          message.textContent = "Iscrizione completata con successo!";
          message.style.color = "green";
          prossimeForm.reset();
        } else {
          message.textContent = "Errore durante l'invio. Riprova.";
          message.style.color = "red";
        }
      } catch (err) {
        message.textContent = "Errore di connessione.";
        message.style.color = "red";
      }
    });
  }
});
