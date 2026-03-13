// Afficher une section et cacher les autres
function showSection(id) {
  // 1. Cacher toutes les sections
  document.querySelectorAll(".section").forEach((s) => {
    s.classList.remove("active");
  });

  // 2. Désactiver tous les boutons de navigation
  document.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.remove("active");
  });

  // 3. Afficher la section demandée
  document.getElementById(id).classList.add("active");

  // 4. Activer le bon bouton
  // On cherche le bouton dont le onclick contient l'id
  document.querySelectorAll(".nav-btn").forEach((b) => {
    if (b.getAttribute("onclick").includes(id)) {
      b.classList.add("active");
    }
  });
}
