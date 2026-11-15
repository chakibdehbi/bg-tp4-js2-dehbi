"use strict";


let persons = [
  { nom: "Ali", prenom: "Karim", points: 12 },
  { nom: "Nadia", prenom: "Messaoud", points: 8 },
  { nom: "Yacine", prenom: "Brahim", points: 10 },
];

let lignes = 0;
let total_points = 0;

// --- Initialisation du tableau au chargement ---
function init() {
  for (let p of persons) doInsert(p.nom, p.prenom, p.points);
}

// --- Fonction d’insertion complète ---
function doInsert(nom, prenom, points) {
  lignes++;
  total_points += Number(points);
  doInsertRowTable(lignes, nom, prenom, points);
  update_summary();
}

// --- Création d’une ligne du tableau ---
function doInsertRowTable(num, nom, prenom, points) {
  const tbody = document.getElementById("table_body");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td class="col_number">${num}</td>
    <td class="col_text">${nom}</td>
    <td class="col_text">${prenom}</td>
    <td class="col_text">${points}</td>
    <td class="col_chkbox"><input type="checkbox"/></td>
  `;

  tbody.appendChild(row);
}

// --- Mise à jour du résumé ---
function update_summary() {
  document.getElementById("nb_lignes").textContent = `${lignes} ligne(s)`;
  document.getElementById("total_points").textContent = `Total point(s) = ${total_points}`;
}


function doNewData() {
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const points = document.getElementById("points").value.trim();

  
  if (nom === "" || prenom === "" || points === "") {
    alert("⚠️ Veuillez remplir tous les champs avant d’ajouter.");
    return;
  }

  // Insertion dans le tableau HTML et JS
  doInsert(nom, prenom, Number(points));
  persons.push({ nom, prenom, points: Number(points) });

  // Réinitialiser les champs
  document.getElementById("nom").value = "";
  document.getElementById("prenom").value = "";
  document.getElementById("points").value = "";
}

// --- Bouton Console (slide 57) ---
function ConsoleTableau() {
  console.table(persons);
}

// --- Événements ---
document.getElementById("btn_add").addEventListener("click", doNewData);
document.getElementById("btn_console").addEventListener("click", ConsoleTableau);
window.onload = init;