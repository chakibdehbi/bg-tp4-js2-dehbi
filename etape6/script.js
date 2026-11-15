"use strict";

let persons = [
  
];

let lignes = 0;
let total_points = 0;

function init() {
  for (let p of persons) doInsert(p.nom, p.prenom, p.points);
}

function doInsert(nom, prenom, points) {
  lignes++;
  total_points += Number(points);
  doInsertRowTable(lignes, nom, prenom, points);
  update_summary();
}

function doInsertRowTable(num, nom, prenom, points) {
  const tbody = document.getElementById("table_body");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td class="col_number">${num}</td>
    <td class="col_text">${nom}</td>
    <td class="col_text">${prenom}</td>
    <td class="col_text">${points}</td>
    <td class="col_chkbox"><input type="checkbox" /></td>
  `;

  tbody.appendChild(row);
}

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

  doInsert(nom, prenom, Number(points));
  persons.push({ nom, prenom, points: Number(points) });

  document.getElementById("nom").value = "";
  document.getElementById("prenom").value = "";
  document.getElementById("points").value = "";
}

function ConsoleTableau() {
  console.table(persons);
}


function deleteRow() {
  const tbody = document.getElementById("table_body");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  let removedCount = 0;
  let removedPoints = 0;

  // On parcourt toutes les lignes
  for (let i = rows.length - 1; i >= 0; i--) {
    const checkbox = rows[i].querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      // Supprime la ligne visuellement
      const points = Number(rows[i].children[3].textContent);
      removedPoints += points;
      tbody.removeChild(rows[i]);
      persons.splice(i, 1);
      removedCount++;
    }
  }

  if (removedCount > 0) {
    lignes -= removedCount;
    total_points -= removedPoints;
    update_summary();
  } else {
    alert("Aucune ligne sélectionnée à supprimer !");
  }
}



document.getElementById("btn_add").addEventListener("click", doNewData);
document.getElementById("btn_console").addEventListener("click", ConsoleTableau);
document.getElementById("btn_delete").addEventListener("click", deleteRow);
window.onload = init;