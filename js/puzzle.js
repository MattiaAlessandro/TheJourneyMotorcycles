// puzzle.js
document.addEventListener("DOMContentLoaded", () => {
  const puzzleContainer = document.querySelector(".photo-puzzle");
  if (!puzzleContainer) return;

  // Elenco delle sottocartelle da caricare
  const folders = [
    "moto/cb500",
    "moto/cbr1000",
    "moto/ducati",
    "moto/gialla",
    "moto/gruppo",
    "moto/hornet",
    "moto/mta",
    "moto/uscite"
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