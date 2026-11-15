"use strict"; 


function doInsertRowTable(num, nom, prenom, points) {
  // Sélection du tbody
  const tbody = document.getElementById("table_body");

  // Création d'une nouvelle ligne
  const newRow = document.createElement("tr");

  // Création et insertion des cellules
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

  // Ajout de la ligne dans le tableau
  tbody.appendChild(newRow);
}


document.getElementById("btn_add").addEventListener("click", function() {
  doInsertRowTable(99, "nom", "prenom", 10);
});