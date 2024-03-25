let date = new Date("2024-03-25");
let date2 = new Date("2024-03-24");


function jourTravaille(date) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let jour = date.toLocaleDateString('fr-FR', options);
    let jourSemaine = date.getDay();

    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} est un week-end`);
    } else {
        console.log(`Oui, ${jour} est un jour travaillé`);
    }
}

jourTravaille(date);
jourTravaille(date2);