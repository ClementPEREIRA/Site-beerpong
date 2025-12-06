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


function lancerBalleArc_defilement() {
  const gob = document.createElement("img");
  gob.src = "images/gobelets_2.png";
  gob.style.position = "fixed"; // ✅ reste fixe à l’écran
  gob.style.width = "400px";
  gob.style.left = "1100px";
  gob.style.top = "300px";
  gob.style.zIndex = "3000"; // ✅ au-dessus du reste du site
  gob.style.pointerEvents = "none"; // ✅ ne bloque pas les clics
  document.body.appendChild(gob);



  const balle = document.createElement("img");
  balle.src = "images/ball.png";
  balle.style.position = "fixed"; // ✅ reste fixe à l’écran
  balle.style.width = "80px";
  balle.style.left = "100px";
  balle.style.top = "500px";
  balle.style.zIndex = "3000"; // ✅ au-dessus du reste du site
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




// --- 1) Afficher les gobelets une seule fois ---
const gob = document.createElement("img");
gob.src = "images/gobelets_2.png";
gob.style.position = "absolute";
gob.style.width = "200px";
gob.style.left = "1300px";
gob.style.top = "30px";
gob.style.zIndex = "2000";
gob.style.pointerEvents = "none";
document.body.appendChild(gob);


// --- 2) Fonction qui lance une balle ---
function lancerBalle_haut_page() {
  const balle = document.createElement("img");
  balle.src = "images/ball.png";
  balle.style.position = "absolute";
  balle.style.width = "30px";

  balle.style.left = "1100px";
  balle.style.top = "95px";

  balle.style.zIndex = "2000";
  balle.style.pointerEvents = "none";
  document.body.appendChild(balle);

  let t = 0;

  const interval = setInterval(() => {
    t += 0.04;

    // Trajectoire
    const x = 1100 + 92 * t;
    const y = 95 - 50 * Math.sin(t);
    const w = 30 - 3 * t; // balle qui rétrécit

    balle.style.left = x + "px";
    balle.style.top = y + "px";
    balle.style.width = w + "px";

    // Quand l’animation est finie
    if (t > Math.PI) {
      clearInterval(interval);
      balle.remove();

      // Lance une nouvelle balle automatiquement
      setTimeout(lancerBalle_haut_page, 300); // petite pause facultative
    }
  }, 16);
}

// --- 3) Lancer la première balle ---
lancerBalle_haut_page();

// Position de la planche
const x_planche = 60;
const y_planche = 60;

// Planche en bois
const planche = document.createElement("img");
planche.src = "images/planche.png";
planche.style.position = "absolute";
planche.style.width = "200px";
planche.style.left = x_planche+"px";
planche.style.top = y_planche+"px";
planche.style.zIndex = "2000";
planche.style.pointerEvents = "none";
document.body.appendChild(planche);

function flip_cup() {
  const verre_1 = document.createElement("img");
  verre_1.src = "images/gobelet_bleu.png";
  verre_1.style.position = "absolute";
  verre_1.style.width = "40px";
  verre_1.style.left = x_planche+5+"px";
  verre_1.style.top = y_planche+40+"px";
  verre_1.style.zIndex = "2000";
  verre_1.style.pointerEvents = "none";
  verre_1.style.transform =  `rotate(${170}deg)`;
  document.body.appendChild(verre_1);

  const verre_2 = document.createElement("img");
  verre_2.src = "images/gobelet_bleu.png";
  verre_2.style.position = "absolute";
  verre_2.style.width = "40px";
  verre_2.style.left = x_planche+140+"px";
  verre_2.style.top = y_planche-35+"px";
  verre_2.style.zIndex = "2000";
  verre_2.style.pointerEvents = "none";
  verre_2.style.transform =  `rotate(${170}deg)`;
  document.body.appendChild(verre_2);

  let t = 0;
  let x = x_planche+5
  let y = y_planche+40
  let signe = -1
  let compteur = 0
  let angle = 170
  let stop = 0

  const interval = setInterval(() => {
    t += 0.04;

    // Trajectoire
    const max_temp = 2
    if (t - compteur * max_temp > max_temp) {
      signe = -signe
      compteur = compteur + 1
    }

    if (compteur % 2 ===0 & stop === 0) {
    stop = 1
    t = 0
    compteur = 0
    // for (let i = 0; i < 500000000; i++) {
    // }
    x = x_planche+5
    y = y_planche+40
    }
    else {
    x = x + signe * 1;
    y = y + signe * 2;
    angle = angle + 10

    verre_1.style.left = x + "px";
    verre_1.style.top = y + "px";
    verre_1.style.transform =  `rotate(${angle}deg)`;
    }

    if (compteur % 2 ===1) {
      stop = 0
    }
  }, 16);


}

flip_cup()


document.getElementById("contactBtn").addEventListener("click", lancerBalleArc_defilement);

// let x_verres_lateraux = 5200


// const balle_gauche = document.createElement("img");
// balle_gauche.src = "images/ball.png";
// balle_gauche.style.position = "absolute"; // ✅ reste fixe à l’écran
// balle_gauche.style.width = "80px";
// balle_gauche.style.left = "-130px";
// balle_gauche.style.top = "400px";
// balle_gauche.style.zIndex = "2000"; // ✅ au-dessus du reste du site
// balle_gauche.style.pointerEvents = "none"; // ✅ ne bloque pas les clics
// document.body.appendChild(balle_gauche);

// const gob_gauche = document.createElement("img");
// gob_gauche.src = "images/gobelets_3.png";
// gob_gauche.style.position = "absolute"; // ✅ reste fixe à l’écran
// gob_gauche.style.width = "250px";
// gob_gauche.style.left = "-10px";
// gob_gauche.style.top = x_verres_lateraux + "px";
// gob_gauche.style.zIndex = "1999"; // ✅ au-dessus du reste du site
// gob_gauche.style.pointerEvents = "none"; // ✅ ne bloque pas les clics
// document.body.appendChild(gob_gauche);

// const gob_gauche_front = document.createElement("img");
// gob_gauche_front.src = "images/gobelets_3_front.png";
// gob_gauche_front.style.position = "absolute"; // ✅ reste fixe à l’écran
// gob_gauche_front.style.width = "182px";
// gob_gauche_front.style.left = "25px";
// gob_gauche_front.style.top = x_verres_lateraux + 46 + "px";
// gob_gauche_front.style.zIndex = "2001"; // ✅ au-dessus du reste du site
// gob_gauche_front.style.pointerEvents = "none"; // ✅ ne bloque pas les clics
// document.body.appendChild(gob_gauche_front);

// let hori_1 = -200
// let latestScroll = 0;
// window.addEventListener("scroll", () => {
//     latestScroll = window.scrollY;
//     requestAnimationFrame(animate);
// });

// function animate() {
//     if (hori_1<0) {
//       balle_gauche.style.left = 70 + hori_1 + "px";
//       hori_1 += latestScroll/500
//     }
//     balle_gauche.style.top = latestScroll + 400 + "px";
//     if (latestScroll>x_verres_lateraux - 300) {
//       balle_gauche.remove()
//     }
// }



const oie_laterale = document.createElement("img");
oie_laterale.src = "images/oie_laterale.png";
oie_laterale.style.position = "absolute"; // ✅ reste fixe à l’écran
oie_laterale.style.width = "350px";
oie_laterale.style.left = "1300px";
oie_laterale.style.top = "600px";
oie_laterale.style.zIndex = "2001"; // ✅ au-dessus du reste du site
oie_laterale.style.pointerEvents = "none"; // ✅ ne bloque pas les clics
document.body.appendChild(oie_laterale);


const oie_laterale_2 = document.createElement("img");
oie_laterale_2.src = "images/oie_laterale.png";
oie_laterale_2.style.position = "absolute"; // ✅ reste fixe à l’écran
oie_laterale_2.style.width = "350px";
oie_laterale_2.style.left = "1300px";
oie_laterale_2.style.top = "2500px";
oie_laterale_2.style.zIndex = "2001"; // ✅ au-dessus du reste du site
oie_laterale_2.style.pointerEvents = "none"; // ✅ ne bloque pas les clics
document.body.appendChild(oie_laterale_2);