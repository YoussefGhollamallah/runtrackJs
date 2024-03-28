let para = document.getElementById("ville");
let button = document.getElementById("button");


async function jsonValueKey() {
   
    button.addEventListener("click", () => {
      const url = "plateforme.json"
      fetch(url)
      .then(response => response.json())
      .then(data => para.innerHTML = data["city"])
    })
}


jsonValueKey()