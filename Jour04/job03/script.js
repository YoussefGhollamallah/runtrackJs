let info = document.getElementById("information")
const url = "pokemon.json";
let idPokemon = document.getElementById("id")
let nomPokemon = document.getElementById("nom")
let typePokemon = document.getElementById("type-liste")
var valeurselectionnee = typePokemon.options[typePokemon.selectedIndex].value;

console.log(valeurselectionnee)

async function getID() {
    fetch(url)
    .then(response => response.json())
    .then(data => info.innerHTML = data[0]["type"])
}

getID()