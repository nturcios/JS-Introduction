// (Very easy) Create two variables and assign a number to each. Console log the difference between the numbers. 
// Example output: “The difference between 6 and 2 is 4”
let num1 = 4;
let num2 = 7;
console.log('The difference between 4 and 7 is:' , (num2 - num1));

//(Easy) Create two variables and assign a person’s name to each.
//Console log a statement that says which name is shorter or longer, and by how many characters.

let person1 = "Messi";
let person2 = "Ronaldo"

let person1Length = person1.length;
let person2Length = person2.length;

if (person1Length < person2Length) {
    console.log(`The name ${person1} is shorter than ${person2} by ${person1Length - person2Length} characters"`);
}
else if (person2Length < person1Length) {
    console.log(`The name ${person2} is longer than ${person1}by ${person2Length - person1Length} characters`);
} 
else {
    console.log(`The name ${person1} is equal to ${person2}`);
}

// (Medium) Write a program to tell if someone is shouting (typing in all caps), 
// whispering(typing in all lowercase), or neither.Use prompt to get user input, 
//and then console log whether the user was shouting, whispering, or talking normally.

alert ("Welcome User")
let userResponse = prompt("Say something:"); 
if (userResponse === userResponse.toUpperCase()) {
    console.log("YOU ARE SHOUTING!");
} else if (userResponse === userResponse.toLowerCase()) {
    console.log("you are whispering");
} else { console.log("you are speaking normally") };

//(Hard)Create 4 math functions

function add(num1, num2) {
    return num1 + num2;
  }
  console.log(add(3,5));
  
  function subtract(num1, num2) {
    return num1 - num2
  }
  console.log(subtract(8,6));
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  console.log (multiply(12,2));
  
  function divide(num1, num2){
    return num1 / num2;
  }
console.log(divide(50, 2));
  
//(Very Hard) Create a simple calculator that prompts the user for a number, an operator 

const Num1 = prompt("Enter A Number");
const Operator = prompt ("Please Enter An Operator");
const Num2 = prompt ("Enter Another Number");


function add(Num1, Num2) {
    return Num1 + Num2;
}

function subtract(Num1, Num2) {
    return Num1 - Num2;
}

function multiply(Num1, Num2) {
    return Num1 * Num2;
}

function divide(Num1, Num2) {
    return Num1 / Num2;
}

switch(Operator.toString()){
  case '+':
    console.log(parseInt(Num1) + parseInt(Num2));
    break;
  case '-':
    console.log(parseInt(Num1) - parseInt(Num2));
    break;
  case '*':
    console.log(parseInt(Num1) * parseInt(Num2));
    break;
  case '/':
    console.log(parseInt(Num1) / parseInt(Num2));
    break;
}
