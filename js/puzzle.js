// MOSAICO FOTO
document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery");
  if (!galleryContainer) return;

  // Elenco di tutte le immagini con percorsi completi
  const images = [
    // CB500
    "assets/img/moto/cb500/cb500-1.jpg", "assets/img/moto/cb500/cb500-2.jpg",
    // CBR1000
    "assets/img/moto/cbr1000/cbr1000-2.jpg", "assets/img/moto/cbr1000/cbr1001cerda.jpg",
    // DUCATI
    "assets/img/moto/ducati/ducati1.jpg", "assets/img/moto/ducati/ducati2.jpg", "assets/img/moto/ducati/ducati3.jpg",
    "assets/img/moto/ducati/ducati4.jpg", "assets/img/moto/ducati/ducati5.jpg", "assets/img/moto/ducati/ducati6.jpg",
    "assets/img/moto/ducati/ducati7.jpg", "assets/img/moto/ducati/ducati8.jpg", "assets/img/moto/ducati/ducati9.jpg",
    "assets/img/moto/ducati/ducati10.jpg",
    // GIALLA
    "assets/img/moto/gialla/gialla1.jpg", "assets/img/moto/gialla/gialla2.jpg", "assets/img/moto/gialla/gialla3.jpg", "assets/img/moto/gialla/gialla4.jpg",
    // GRUPPO
    "assets/img/moto/gruppo/GRUPPO.jpg", "assets/img/moto/gruppo/gruppo1.jpg", "assets/img/moto/gruppo/gruppo2.jpg",
    "assets/img/moto/gruppo/gruppo3.jpg", "assets/img/moto/gruppo/gruppo4.jpg", "assets/img/moto/gruppo/gruppo5.jpg",
    "assets/img/moto/gruppo/gruppo6.jpg", "assets/img/moto/gruppo/gruppo7.jpg", "assets/img/moto/gruppo/gruppo8.jpg",
    "assets/img/moto/gruppo/gruppo9.jpg", "assets/img/moto/gruppo/gruppo10.jpg", "assets/img/moto/gruppo/gruppo-cerda.jpg", 
    "assets/img/moto/gruppo/merch1.jpg", "assets/img/moto/gruppo/merch2.jpg", "assets/img/moto/gruppo/merch3.jpg",
     "assets/img/moto/gruppo/merch4.jpg",
    // HORNET
    "assets/img/moto/hornet/hornet1.jpg", "assets/img/moto/hornet/hornet2.jpg", "assets/img/moto/hornet/hornet-fz.jpg",
    // MTA
    "assets/img/moto/mta/mta1.jpg", "assets/img/moto/mta/mta2.jpg", "assets/img/moto/mta/mta3.jpg", "assets/img/moto/mta/mta4.jpg", "assets/img/moto/mta/mta5.jpg",
    // MT09 e R1
    "assets/img/moto/mt09/mt09.jpg", "assets/img/moto/r1/r1-1.jpg", "assets/img/moto/r1/r1-2.jpg",
   
  ];

  // Crea dinamicamente le immagini
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto del gruppo";
    img.loading = "lazy";

    // fallback in caso di errore
    img.onerror = () => {
      console.warn(`Immagine non trovata: ${src}`);
      img.style.display = "none";
    };

    galleryContainer.appendChild(img);
  });
});