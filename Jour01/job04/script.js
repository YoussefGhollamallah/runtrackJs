const annee = 2021;

function bissextile(annee) {
    if (annee % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bissextile(annee));