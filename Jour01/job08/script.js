function sommeNombrePremier(number1, number2) {
    if (number1 <= 1 && number2 <= 1) {
        return false;
    }
    for (let i = 2; i < number1; i++) {
        if (number1 % i === 0) {
            return false;
        }
    }
    for (let i = 2; i < number2; i++) {
        if (number2 % i === 0) {
            return false;
        }
    }
    return true;
    
}

console.log(sommeNombrePremier(3, 10));
console.log(sommeNombrePremier(3, 7));