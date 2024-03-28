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
            tbody.innerHTML = "";
            
            for (let i = 0; i < data.length ; i++) {
                // Création de la ligne : va créer une ligne à chaque itération de la boucle par rapport à la taille du tableau
                let ligne = document.createElement("tr"); 

                // Création de la colonne id
                let colonneId = document.createElement("td");
                let textId = document.createTextNode(data[i]["id"]);
                colonneId.appendChild(textId);
                ligne.appendChild(colonneId);
                
                // Création de la colonne nom
                let colonneNom = document.createElement("td");
                let textNom = document.createTextNode(data[i]["nom"]);
                colonneNom.appendChild(textNom);
                ligne.appendChild(colonneNom);
                
                // Création de la colonne prenom
                let colonnePrenom = document.createElement("td");
                let textPrenom = document.createTextNode(data[i]["prenom"]);
                colonnePrenom.appendChild(textPrenom);
                ligne.appendChild(colonnePrenom);

                // Création de la colonne email
                let colonneEmail = document.createElement("td");
                let textEmail = document.createTextNode(data[i]["email"]);
                colonneEmail.appendChild(textEmail);
                ligne.appendChild(colonneEmail);

                tbody.appendChild(ligne)
            }
        })

        })
    tableau.appendChild(tbody)
}

fetchUtilisateurs()