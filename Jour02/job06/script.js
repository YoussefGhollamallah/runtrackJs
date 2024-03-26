let body = document.body;
let header = document.getElementById("header");
let main = document.getElementById("main");
let footer = document.getElementById("footer");


let liste = ["k", "o", "n", "a", "m", "i"];

function changeColor() {
    document.addEventListener("keydown", (event) => {
        if (event.key === liste[0]) {
            liste.shift();
            if (liste.length === 0) {
                header.style.backgroundColor = "#005FFF";
                header.style.color = "#fff";
                header.textContent = "Bienvenue sur Konami !";
                header.style.fontSize = "3em";
                header.style.textAlign = "center";
                main.style.backgroundColor = "#ddd7d0";
                footer.style.backgroundColor = "#005FFF";

                liste = ["k", "o", "n", "a", "m", "i"];
            }
        } else {
            liste = ["k", "o", "n", "a", "m", "i"];
        }
    });
}

changeColor();