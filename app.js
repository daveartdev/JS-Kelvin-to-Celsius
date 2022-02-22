// assigning a constant variable a value of 293
const kelvin = 293;

//assigning celsius variable with operator
const celsius = kelvin - 273;

//assigning farenheit 
let farenheit = celsius * (9 / 5) + 32;

//using floor method to round down farenheit value
farenheit = Math.floor(farenheit);

//String to print/log information
console.log(`The temperature is ${farenheit} degrees Farenheit.`);