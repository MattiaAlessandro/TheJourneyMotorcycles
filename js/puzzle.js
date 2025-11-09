// puzzle.js
document.addEventListener("DOMContentLoaded", () => {
  const puzzleContainer = document.querySelector(".photo-puzzle");
  if (!puzzleContainer) return;

  // Elenco delle sottocartelle da caricare
 const imageList = [
  "castelbuono1.jpg",
  "castelbuono2.jpg",
  "cb500-1.jpg",
  "cb500-2.jpg",
  "cb500-3.jpg",
  "cbr1000-2.jpg",
  "cbr1001cerda.jpeg",
  "cesaro.jpg",
  "ducati1.jpg",
  "ducati2.jpg",
  "ducati3.jpg",
  "ducati4.jpg",
  "ducati5.jpg",
  "ducati6.jpg",
  "ducati7.jpg",
  "ducati8.jpg",
  "ducati9.jpg",
  "ducati10.jpg",
  "gialla1.jpg",
  "gialla2.jpg",
  "gialla3.jpg",
  "gialla4.jpg",
  "gibellina.jpg",
  "GRUPPO.jpg",
  "gruppo1.jpg",
  "gruppo2.jpg",
  "gruppo3.jpg",
  "gruppo4.jpg",
  "gruppo5.jpg",
  "gruppo6.jpg",
  "gruppo7.jpg",
  "gruppo8.jpg",
  "gruppo9.jpg",
  "gruppo10.jpg",
  "gruppo11.jpg",
  "gruppo-cerda.jpg",
  "hornet-fz.jpg",
  "hornet1.jpg",
  "hornet2.jpg",
  "logo.jpg",
  "merch1.jpg",
  "merch2.jpg",
  "merch3.jpg",
  "merch4.jpg",
  "mistretta.jpg",
  "mt09.jpg",
  "mt09g.jpg",
  "mt1.jpg",
  "mta2.jpg",
  "mta3.jpg",
  "mta4.jpg",
  "mta5.jpg",
  "mta6cerda.jpg",
  "nostremoto.jpg",
  "r1-1.jpg",
  "r1-2.jpg"
];

  // Estensioni supportate
  const extensions = [".jpg", ".jpeg", ".png"];

  // Funzione per generare percorsi immagini
  folders.forEach(folder => {
    // Nome semplificato per il gruppo (es. ducati, gruppo, ecc.)
    const folderName = folder.split("/").pop();

    // Crea un piccolo titolo per gruppo
    const title = document.createElement("h3");
    title.textContent = folderName.toUpperCase();
    title.style.color = "#f5f5f5";
    title.style.gridColumn = "1 / -1";
    title.style.marginTop = "40px";
    puzzleContainer.appendChild(title);

    // Array di nomi generici (max 15 immagini per cartella)
    for (let i = 1; i <= 15; i++) {
      extensions.forEach(ext => {
        const imgPath = assets/img/`${folder}/${folderName}${i}${ext}`;
        const img = new Image();
        img.src = imgPath;

        img.onload = () => {
          const image = document.createElement("img");
          image.src = imgPath;
          image.alt = `${folderName} ${i}`;
          puzzleContainer.appendChild(image);
        };
      });
    }
  });
});