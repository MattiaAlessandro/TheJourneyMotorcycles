// MOSAICO FOTO
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  // Elenco di tutte le immagini con percorsi completi
  const images = [
    // CB500
    "moto/cb500/cb500-1.jpg", "moto/cb500/cb500-2.jpg",
    // CBR1000
    "moto/cbr1000/cbr1000-2.jpg", "moto/cbr1000/cbr1001cerda.jpg",
    // DUCATI
    "moto/ducati/ducati1.jpg", "moto/ducati/ducati2.jpg", "moto/ducati/ducati3.jpg",
    "moto/ducati/ducati4.jpg", "moto/ducati/ducati5.jpg", "moto/ducati/ducati6.jpg",
    "moto/ducati/ducati7.jpg", "moto/ducati/ducati8.jpg", "moto/ducati/ducati9.jpg",
    "moto/ducati/ducati10.jpg",
    // GIALLA
    "moto/gialla/gialla1.jpg", "moto/gialla/gialla2.jpg", "moto/gialla/gialla3.jpg", "moto/gialla/gialla4.jpg",
    // GRUPPO
    "moto/gruppo/GRUPPO.jpg", "moto/gruppo/gruppo1.jpg", "moto/gruppo/gruppo2.jpg",
    "moto/gruppo/gruppo3.jpg", "moto/gruppo/gruppo4.jpg", "moto/gruppo/gruppo5.jpg",
    "moto/gruppo/gruppo6.jpg", "moto/gruppo/gruppo7.jpg", "moto/gruppo/gruppo8.jpg",
    "moto/gruppo/gruppo9.jpg", "moto/gruppo/gruppo10.jpg", "moto/gruppo/gruppo-cerda.jpg", 
    "moto/gruppo/merch1.jpg", "moto/gruppo/merch2.jpg", "moto/gruppo/merch3.jpg",
     "moto/gruppo/merch4.jpg",
    // HORNET
    "moto/hornet/hornet1.jpg", "moto/hornet/hornet2.jpg", "moto/hornet/hornet-fz.jpg",
    // MTA
    "moto/mta/mta1.jpg", "moto/mta/mta2.jpg", "moto/mta/mta3.jpg", "moto/mta/mta4.jpg", "moto/mta/mta5.jpg",
    // MT09 e R1
    "moto/mt09/mt09.jpg", "moto/r1/r1-1.jpg", "moto/r1/r1-2.jpg",
    // USCITE
    "moto/uscite/cerda.jpg", "moto/uscite/cesaro.jpg", "moto/uscite/gibellina.jpg", "moto/uscite/mistretta.jpg"
  ];

  images.forEach(path => {
    const img = document.createElement("img");
    img.src = `assets/img/${path}`;
    img.alt = path.split("/").pop().split(".")[0];
    gallery.appendChild(img);
  });
});