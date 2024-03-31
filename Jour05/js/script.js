// récupération des élément par leur id
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let password = document.getElementById("password");
let adresse = document.getElementById("adresse");
let postal = document.getElementById("postal");
let button = document.getElementById("button")



let messagenom = document.getElementById("messagenom");
function checkNom() {
    return new Promise((resolve, reject) => {
        if (nom.value !== "" && nom.value.length > 4) {
            resolve();
        } else {
            reject("Votre nom doit contenir plus de 4 caractères.");
        }
    });
}


let messageprenom = document.getElementById("messageprenom");
function checkPrenom() {
    return new Promise((resolve, reject) => {
        if (nom.value !== "" && nom.value.length > 3) {
            resolve();
        } else {
            reject("Votre prenom doit contenir plus de 3 caractères.");
        }
    });
}


function checkEmail() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validDomains = ["laplateforme.io", "outlook.fr", "hotmail.fr", "gmail.com"];
    
    if (!re.test(email)) {
        return false;
    }

    var domain = email.split('@')[1]; 
    return validDomains.includes(domain);
}


let messageemail = document.getElementById("messageemail")
function validEmail() {
    return new Promise((resolve, reject) => {
        if (checkEmail(email)) {
            resolve();
        } else {
            reject("votre mail n'est pas valide")
        }
    })
}


button.addEventListener("click", async (e) => {
    e.preventDefault();

    let isValid = true; // Variable pour vérifier si tous les champs sont valides

    try {
        await checkNom();
        messagenom.innerText = ""; // Réinitialise le message d'erreur
    } catch (error) {
        messagenom.innerText = error;
        messagenom.style.color = "red";
        isValid = false; // Marque le champ comme invalide
    }

    try {
        await checkPrenom();
        messageprenom.innerText = ""; // Réinitialise le message d'erreur
    } catch (error) {
        messageprenom.innerText = error;
        messageprenom.style.color = "red";
        isValid = false; // Marque le champ comme invalide
    }

    try {
        await validEmail();
        messageemail.innerText = ""; // Réinitialise le message d'erreur
    } catch (error) {
        messageemail.innerText = error;
        messageemail.style.color = "red";
        isValid = false; // Marque le champ comme invalide
    }

    if (isValid) {
        document.formInscription.submit(); // Soumettre le formulaire seulement si tous les champs sont valides
    }
});