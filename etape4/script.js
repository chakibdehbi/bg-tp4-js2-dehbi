"use strict";


let persons = [
  { nom: "Ali", prenom: "Karim", points: 12 },
  { nom: "Nadia", prenom: "Messaoud", points: 8 },
  { nom: "Yacine", prenom: "Brahim", points: 10 }
];

// Compteurs
let lignes = 0;          // nombre de lignes
let total_points = 0;    // total des points

// Fonction d’initialisation
function init() {
  for (let i = 0; i < persons.length; i++) {
    let p = persons[i];
    doInsert(p.nom, p.prenom, p.points);
  }
}

// Fonction doInsert 
function doInsert(nom, prenom, points) {
  lignes++;                     
  total_points += points;       
  doInsertRowTable(lignes, nom, prenom, points);
  update_summary();             // mise à jour de l’espace résumé
}


// Fonction doInsertRowTable 
function doInsertRowTable(num, nom, prenom, points) {
  const tbody = document.getElementById("table_body");
  const newRow = document.createElement("tr");

  const tdNum = document.createElement("td");
  tdNum.textContent = num;
  tdNum.className = "col_number";
  newRow.appendChild(tdNum);

  const tdNom = document.createElement("td");
  tdNom.textContent = nom;
  tdNom.className = "col_text";
  newRow.appendChild(tdNom);

  const tdPrenom = document.createElement("td");
  tdPrenom.textContent = prenom;
  tdPrenom.className = "col_text";
  newRow.appendChild(tdPrenom);

  const tdPoints = document.createElement("td");
  tdPoints.textContent = points;
  tdPoints.className = "col_text";
  newRow.appendChild(tdPoints);

  const tdCheck = document.createElement("td");
  tdCheck.className = "col_chkbox";
  tdCheck.innerHTML = '<input type="checkbox"/>';
  newRow.appendChild(tdCheck);

  tbody.appendChild(newRow);
}


function update_summary() {
  document.getElementById("nb_lignes").textContent = lignes + " ligne(s)";
  document.getElementById("total_points").textContent = "Total point(s) = " + total_points;
}


function ConsoleTableau() {
  console.table(persons);
}


document.getElementById("btn_console").addEventListener("click", ConsoleTableau);
document.getElementById("btn_add").addEventListener("click", function() {
  doInsert("nom", "prenom", 10);
});

// ---------------------------------------------------------
// Lancement automatique
window.onload = init;