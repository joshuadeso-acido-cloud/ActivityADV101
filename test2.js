let words = ["Durian", "Apple", "Mango", "Corn", "Papaya"];
let transformed = [];

for (let i = 0; i < words. length; i++) {
    let rev = "";
    for (let j = words[i].length - 1; j >= 0; j--) {
        rev += words[i][j];
    }
    transformed.push(rev.toUpperCase());
}
console.log(transformed);

let numbers = [12,45,67,23,90,32,11,9,28];
let found = [];

for (let i = 0; i < numbers.lengthl; i++){
    if (numbers[i] % 2 === 0 && numbers[i] > 20) {
        found.push(numbers[i]);
    }
};
console.log("Found " + found.length + " numbers: [" + found.join(", ") + "]");