// Récupération des élément html par son ID
let button = document.getElementById("button")
let tableau = document.getElementById("tableau")

let tbody = document.createElement("tbody")


// Création de la function d'appel des utilisateur JS
async function fetchUtilisateurs () {
    // appel du fichier json
    const url = await fetch("utilisateur.json")
    .then(r => r.json()) // permet de parsé les éléments json
    .then(data => {
        button.addEventListener("click", () => {
            for (let i = 0; i < data.length ; i++) {
                let ligne = document.createElement("tr");
                for (let j = 0; j < data.length ; j++) {
                    let colonne = document.createElement("td");
                    let text = document.createTextNode(
                    data[i]["prenom"]+ " " + data[j]["nom"],
                );
                colonne.appendChild(text)
                ligne.appendChild(colonne)
                }
    
                tbody.appendChild(ligne)
            }
        })
        
        })
    tableau.appendChild(tbody)
}

fetchUtilisateurs()