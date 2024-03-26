let bouton = document.getElementById("button");
let compteur = document.getElementById("compteur");
let count = 0;

function  addOne() {
    bouton.addEventListener("click", () => {
        count++;
        compteur.innerText = count;
    });
}

addOne();