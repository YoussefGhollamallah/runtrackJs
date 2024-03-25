const annee = 2021;
const anneebi = 2020;

function bisextile(annee) {
    if (annee % 4 === 0 && annee % 100 !== 0 || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(annee));
console.log(bisextile(anneebi));
