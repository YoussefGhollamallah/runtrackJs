let button = document.getElementById("button");
let citation = document.getElementById("citation");

async function getCitation() {
    let response = await fetch("expressions.txt");
    let data = await response.text();
    let citations = data.split("\n");
    button.addEventListener("click", () => {
        citation.innerHTML = citations;
    });

}

getCitation();
