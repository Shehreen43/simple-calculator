#! /usr/bin/env node
//SHEBANG
import chalk from "chalk";

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: chalk.blue("Enter first your number"), type: "number", name: "firstNumber" },
  { message: chalk.blue("Enter Second your number"), type: "number", name: "SecondtNumber" },
  { message: chalk.yellow("Select one of the operator to perfom actions"),
    type: "list",
    name: "oprator",
    choices: ["Adition", "Subtraction", "Multiplication","Division"],
  },
]);

//conditional statements
if (answer.oprator == "Adition") {
  console.log(chalk.green.bold("your answer is :" + (answer.firstNumber + answer.SecondtNumber)));
} else if (answer.oprator == "Subtraction") {
  console.log(chalk.blueBright.bold("your answer is :"+ (answer.firstNumber - answer.SecondtNumber)));
} else if (answer.oprator == "Multiplication") {
  console.log(chalk.magenta.bold("your answer is :" + (answer.firstNumber * answer.SecondtNumber)));
}else if (answer.oprator == "Division") {
  console.log(chalk.cyanBright.bold("your answer is :" + (answer.firstNumber / answer.SecondtNumber)));
} else {
  console.log(chalk.redBright.bold("please select a valid oprator "));
};

console.log(chalk.greenBright.italic(`         THE END        `));