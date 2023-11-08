#!/usr/bin/env node
import { user } from "./data.js";
import { userInput, userPin } from "./inputs.js";
console.log("To access the ATM simulation, use one of the following PIN codes:\n" +
    "- ghufran: 123\n" +
    "- affan: 456\n" +
    "- asad: 786\n" +
    "- hamza: 1100\n" +
    "- shahzad:321\n");
let userpin = await userPin();
let enteredpin = parseInt(userpin.pin);
let userobj = Object.entries(user).find(([Key, userdata]) => {
    return userdata.pincode == enteredpin;
});
if (!userobj) {
    console.log("invalid pin");
}
else {
    let [Key, userdata] = userobj;
    console.log(`welcome ${userdata.name}`);
    let userinput = await userInput();
    if (userinput.service == "balance") {
        console.log(`your current balance is ${userdata.balance}`);
    }
    else if (userinput.service == "fastcash") {
        let selectedamount = userinput.amount;
        if (selectedamount <= userdata.balance) {
            userdata.balance -= selectedamount;
            console.log(`withdrawal successful,your new balance is ${userdata.balance}`);
        }
        else {
            console.log("Insufficient balance for fastcash withdrawal.");
        }
    }
    else if (userinput.service == "withdraw") {
        let selectedamount = userinput.amount;
        if (selectedamount <= userdata.balance) {
            userdata.balance -= selectedamount;
            console.log(`withdrawal successful,your new balance is ${userdata.balance}`);
        }
        else {
            console.log("Insufficient balance for fastcash withdrawal.");
        }
    }
}
