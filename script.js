// Zadanie 1
const a = 'Hello';
const b = 'World';
console.log(`${a} ${b}`);

// Zadanie 2
const multiply = (x, y = 1) => x * y;

console.log(multiply(2, 5)); // 10
console.log(multiply(6, 6)); //36
console.log(multiply(2)); // 2

// Zadanie 3
const average = (...theArgs) => theArgs.reduce((a, b) => a + b) / theArgs.length;

console.log(average(1));
console.log(average(2,3));
console.log(average(1,3,6,6));
console.log(average(5,5,5,5,5,5));

// Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average(...grades));

// Zadanie 5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = data;
console.log(`${firstName} ${lastName}`);