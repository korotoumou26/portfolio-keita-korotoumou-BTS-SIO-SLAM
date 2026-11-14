// 1. Animation du terminal : les lignes apparaissent une par une
const lignes = document.querySelectorAll("#term .line");
lignes.forEach((ligne, i) => {
  setTimeout(() => ligne.classList.add("show"), 400 + i * 500);
});

// 2. Menu : met en couleur le lien de la section visible à l'écran
const liens = document.querySelectorAll(".nav nav a");
const observateur = new IntersectionObserver((entrees) => {
  entrees.forEach((entree) => {
    if (entree.isIntersecting) {
      liens.forEach((l) =>
        l.classList.toggle("active", l.getAttribute("href") === "#" + entree.target.id)
      );
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => observateur.observe(s));

// 3. Année automatique dans le pied de page
document.getElementById("annee").textContent = new Date().getFullYear();

// 4. Liste des outils : pour en ajouter un, écris simplement son nom dans ce tableau
const outils = ["Trello", "Diagramme de Gantt", "GitHub", "Figma", "StarUML", "VS Code", "VMware", "Airtable", "Notion"];
const zoneOutils = document.getElementById("outils");
outils.forEach((nom) => {
  const puce = document.createElement("span");
  puce.textContent = nom;
  zoneOutils.appendChild(puce);
});
