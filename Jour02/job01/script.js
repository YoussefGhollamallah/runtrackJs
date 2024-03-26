let citation = document.getElementById("citation");
let bouton = document.getElementById("button");


function showCitation() {
    bouton.addEventListener("click", () => {
       console.log(citation.textContent);
    }
    );
}

showCitation();