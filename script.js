const profils = document.querySelectorAll('.profil');
const flecheGauche = document.querySelector('.fleche.gauche');
const flecheDroite = document.querySelector('.fleche.droite');
let indexActuel = 0;

function afficherProfil(index) {
  profils.forEach((profil, i) => {
    profil.classList.toggle('actif', i === index);
  });
}

flecheGauche.addEventListener('click', () => {
  indexActuel = (indexActuel - 1 + profils.length) % profils.length;
  afficherProfil(indexActuel);
});

flecheDroite.addEventListener('click', () => {
  indexActuel = (indexActuel + 1) % profils.length;
  afficherProfil(indexActuel);
});




document.getElementById("contactBtn").addEventListener("click", (event) => {
  event.preventDefault(); // empêche le saut instantané

  // --- 1️⃣ Défilement fluide vers la section contact ---
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });


  const animationArea = document.getElementById("animation-area");

  // Génère 10 objets animés  
  for (let i = 0; i < 0; i++) {
    const obj = document.createElement("div");
    obj.classList.add("moving-object");

    // Position aléatoire sur l'écran
    obj.style.left = Math.random() * window.innerWidth + "px";
    obj.style.top = window.innerHeight - 50 + "px";

    // Taille et couleur aléatoires
    obj.style.width = obj.style.height = Math.random() * 40 + 10 + "px";
    obj.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;

    animationArea.appendChild(obj);

    // Supprime l’objet après l’animation
    setTimeout(() => obj.remove(), 2000);
  }
});




// // Sélection de la zone où l’objet apparaîtra
// const animationArea = document.getElementById("animation-area");

// // Fonction pour créer et animer une balle
// function lancerBalle() {
//   // 1️⃣ Crée un élément
//   const balle = document.createElement("div");
//   balle.classList.add("moving-object");

//   // 2️⃣ Définit son apparence (image PNG)
//   balle.style.backgroundImage = "url('images/ball.png')"; // ton image .png
//   balle.style.left = Math.random() * window.innerWidth + "px";
//   balle.style.top = window.innerHeight - 60 + "px"; // part du bas de l’écran

//   // 3️⃣ Ajoute l’objet au DOM
//   animationArea.appendChild(balle);

//   // 4️⃣ Supprime après 3 secondes (quand l’animation est finie)
//   setTimeout(() => balle.remove(), 3000);
// }

// Exemple : lancer une balle à chaque clic
// document.addEventListener("click", lancerBalle);


function lancerBalleArc() {
  const gob = document.createElement("img");
  gob.src = "images/gobelets_2.png";
  gob.style.position = "fixed"; // ✅ reste fixe à l’écran
  gob.style.width = "400px";
  gob.style.left = "1100px";
  gob.style.top = "300px";
  gob.style.zIndex = "2000"; // ✅ au-dessus du reste du site
  gob.style.pointerEvents = "none"; // ✅ ne bloque pas les clics
  document.body.appendChild(gob);



  const balle = document.createElement("img");
  balle.src = "images/ball.png";
  balle.style.position = "fixed"; // ✅ reste fixe à l’écran
  balle.style.width = "80px";
  balle.style.left = "100px";
  balle.style.top = "500px";
  balle.style.zIndex = "2000"; // ✅ au-dessus du reste du site
  balle.style.pointerEvents = "none"; // ✅ ne bloque pas les clics
  document.body.appendChild(balle);

  let t = 0;
  const interval = setInterval(() => {
    t += 0.06;

    // Mouvement en arc (x = déplacement horizontal, y = vertical)
    const x = 160 + 350 * t;
    const y = 350 - 200 * Math.sin(t);
    const w = 80 - 10*t;

    balle.style.left = x + "px";
    balle.style.top = y + "px";
    balle.style.width = w + "px";

    if (t > Math.PI) {
      clearInterval(interval);
      balle.remove();
    }

    setTimeout(() => {
  gob.remove()
}, 1500);
  }, 16);
}
document.getElementById("contactBtn").addEventListener("click", lancerBalleArc);
