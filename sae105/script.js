// Attend que la page soit chargée
document.addEventListener("DOMContentLoaded", function () {
  // SÉLECTION DES ÉLÉMENTS
  const img = document.querySelector(".image-cliquable"); // L'image
  const texte = document.querySelector(".texte"); // Le texte
  const formulaire = document.getElementById("formulaire");

  // VARIABLES
  let index = 0; // On commence à l'image 0
  let zoomActif = false; // L'image n'est pas zoomée au début

  // PRÉCHARGEMENT DES IMAGES
  // On charge toutes les images en avance pour éviter les temps de chargement
  images.forEach((chemin) => {
    const imgPreload = new Image();
    imgPreload.src = chemin;
  });

  // AFFICHAGE INITIAL
  img.src = images[index]; // Affiche la première image
  texte.innerHTML = textes[index]; // Affiche le premier texte
  img.alt = "Écran d'accueil"; // Alt initial

  // GESTION DU CLIC SUR L'IMAGE
  img.onclick = function () {
    // CAS 1 : Si l'image n'est pas zoomée
    if (!zoomActif) {
      img.classList.add("zoom"); // Ajoute la classe CSS "zoom"
      zoomActif = true; // On note que l'image est zoomée
      return; // On s'arrête là
    }

    // CAS 2 : Si l'image est zoomée
    img.classList.remove("zoom"); // Retire le zoom
    zoomActif = false; // On note qu'elle n'est plus zoomée

    // Attend 1 seconde (le temps que le dézoom se fasse)
    setTimeout(() => {
      index = (index + 1) % textes.length;
      if (index < images.length) {
        img.src = images[index];
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }

      const alts = [
        "Écran d'accueil",
        "Système solaire",
        "Le Soleil",
        "Planète Mercure",
        "Planète Vénus",
        "Planète Terre",
        "Planète Mars",
        "Planète Jupiter",
        "Planète Saturne",
        "Planète Uranus",
        "Planète Neptune",
        "Écran de fin",
      ];

      img.alt = alts[index];

      const titres = [
        "E-SPACE",
        "Système Solaire",
        "Soleil",
        "Mercure",
        "Vénus",
        "Terre",
        "Mars",
        "Jupiter",
        "Saturne",
        "Uranus",
        "Neptune",
        "Fin",
      ];
      document.title = titres[index] + " - E-SPACE";

      texte.innerHTML = textes[index];

      // Affiche le formulaire
      if (index === textes.length - 1) {
        formulaire.style.display = "block";
        document.getElementById("mentions-legales").style.display = "block";
      } else {
        formulaire.style.display = "none";
        document.getElementById("mentions-legales").style.display = "none";
      }
    }, 1000);
  };
});

// FORMULAIRE
document.getElementById("previsualiser").onclick = function () {
  const nom = document.getElementById("nom").value;
  const url = document.getElementById("url").value;
  const desc = document.getElementById("desc").value;

  // Affiche TOUT dans l'alerte
  alert(
    "Prévisualisation :\n\nNom : " +
      nom +
      "\n\nURL : " +
      url +
      "\n\nDescription :\n" +
      desc
  );
};

document.getElementById("formulaire").onsubmit = function (e) {
  e.preventDefault();
  alert("Très bon choix de planète !");
  this.style.display = "none"; // Cache le formulaire
};
