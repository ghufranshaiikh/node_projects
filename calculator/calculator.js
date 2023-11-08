#!/usr/bin/env node
import inquirer from "inquirer";
let result = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Enter your first number"
    },
    { type: "number",
        name: "numbertwo",
        message: "Enter your second number"
    },
    { type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "select opreator"
    },
]);
if (result.operator == "+") {
    console.log(result.numberone + result.numbertwo);
}
else if (result.operator == "-") {
    console.log(result.numberone - result.numbertwo);
}
else if (result.operator == "*") {
    console.log(result.numberone * result.numbertwo);
}
else if (result.operator == "/") {
    console.log(result.numberone / result.numbertwo);
}
else {
    console.log("enter valid input");
}
