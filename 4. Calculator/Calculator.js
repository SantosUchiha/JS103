console.log("Hello World");

//function calculate(num1, num2, operator)

function calculate(num1, num2, operator) {
  if (operator=='+'){  
    return num1 + num2;}
else if (operator=='-') { 
  return num1 - num2;
} else if (operator=='*')  {
  return num1 * num2;
} else if (operator=='/') {
  return num1 / num2;
}else { 
  console.log("Opperator Not Chosen");
}
}

let results = calculate(10, 5,'-');
console.log("answer is: " + results);
