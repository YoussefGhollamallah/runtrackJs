let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let password = document.getElementById("password");
let adresse = document.getElementById("adresse");
let postal = document.getElementById("postal");
let button = document.getElementById("button");
let traitement = document.getElementById("traitement")

let messagenom = document.getElementById("messagenom");
let messageprenom = document.getElementById("messageprenom");
let messageemail = document.getElementById("messageemail");
let messagepassword = document.getElementById("messagepassword");
let messageadresse = document.getElementById("messageadresse");
let messagepostal = document.getElementById("messagepostal");

function checkNom() {
    return new Promise((resolve, reject) => {
        if (nom.value !== "" && nom.value.length >= 4) {
            resolve();
        } else {
            reject("Votre nom doit contenir au moins 4 caractères.");
        }
    });
}

function checkPrenom() {
    return new Promise((resolve, reject) => {
        if (prenom.value !== "" && prenom.value.length > 3) {
            resolve();
        } else {
            reject("Votre prénom doit contenir au moins 3 caractères.");
        }
    });
}

function checkEmail() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email.value); // Vérifie si la valeur de l'email correspond à l'expression régulière
}

function validEmail() {
    return new Promise((resolve, reject) => {
        if (checkEmail()) {
            resolve();
        } else {
            reject("Votre adresse e-mail n'est pas valide.")
        }
    });
}

function checkPassword() {
    return new Promise((resolve, reject) => {
        if (password.value !== "" && password.value.length >= 8) {
            resolve();
        } else {
            reject("Votre mot de passe doit contenir au moins 8 caractères.");
        }
    });
}

function checkAdresse() {
    return new Promise((resolve, reject) => {
        if (adresse.value !== "") {
            resolve();
        } else {
            reject("Veuillez entrer votre adresse.");
        }
    });
}

function checkPostal() {
    return new Promise((resolve, reject) => {
        if (postal.value !== "") {
            resolve();
        } else {
            reject("Veuillez entrer votre code postal.");
        }
    });
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
    
    try {
        await checkPassword();
        messagepassword.innerText = ""; // Réinitialise le message d'erreur
    } catch (error) {
        messagepassword.innerText = error;
        messagepassword.style.color = "red";
        isValid = false; // Marque le champ comme invalide
    }

    try {
        await checkAdresse();
        messageadresse.innerText = ""; // Réinitialise le message d'erreur
    } catch (error) {
        messageadresse.innerText = error;
        messageadresse.style.color = "red";
        isValid = false; // Marque le champ comme invalide
    }

    try {
        await checkPostal();
        messagepostal.innerText = ""; // Réinitialise le message d'erreur
    } catch (error) {
        messagepostal.innerText = error;
        messagepostal.style.color = "red";
        isValid = false; // Marque le champ comme invalide
    }

    if (isValid) {
        window.location.href = "traitement.html";
    }
});

