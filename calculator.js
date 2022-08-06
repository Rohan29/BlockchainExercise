
let number1 = 30.0;
let number2 = 10.0;

let operator = '-'



let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if  (operator == '/') {
    result = number1 / number2;
} 
else {
  result = number1 % number2;
} 


// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
