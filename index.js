#! /usr/bin/env node
//SHEBANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter Second number", type: "number", name: "SecondtNumber" },
    { message: "Select one of the operator to perfom actions",
        type: "list",
        name: "oprator",
        choices: ["Adition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statements
if (answer.oprator == "Adition") {
    console.log("your answer is :" + (answer.firstNumber + answer.SecondtNumber));
}
else if (answer.oprator == "Subtraction") {
    console.log("your answer is :" + (answer.firstNumber - answer.SecondtNumber));
}
else if (answer.oprator == "Multiplication") {
    console.log("your answer is :" + (answer.firstNumber * answer.SecondtNumber));
}
else if (answer.oprator == "Division") {
    console.log("your answer is :" + (answer.firstNumber / answer.SecondtNumber));
}
else {
    console.log("please select a valid oprator ");
}
;
