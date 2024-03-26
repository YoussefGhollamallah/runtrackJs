let bouton = document.getElementById("bouton");
let citation = document.getElementById("citation");


function showHide() {
    bouton.addEventListener("click", () => {
        if (citation.textContent == "") {
            citation.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        } else {
            citation.textContent = "";
        }
    });
    
}



showHide();