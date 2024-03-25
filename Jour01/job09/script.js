let numbers = [7, 5, 3, 8, 9, 2, 1, 4, 6, 10];
let order = "ASC";

function tri(numbers, order) {
    if (order === "ASC") {
        numbers.sort((a, b) => a - b);
    } else if (order === "DESC") {
        numbers.sort((a, b) => b - a);
    }
    return numbers;
}

console.log(tri(numbers, order));