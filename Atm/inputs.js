import inquirer from "inquirer";
export async function userPin() {
    let userpin = await inquirer.prompt([
        {
            name: "pin",
            type: "password",
            message: "Enter your PIN:",
        },
    ]);
    return await userpin;
}
export async function userInput() {
    let userinput = await inquirer.prompt([
        {
            name: "service",
            type: "list",
            choices: ["balance", "withdraw", "fastcash"],
            message: "select your service",
        },
        {
            type: "list",
            name: "amount",
            choices: [1000, 2000, 10000, 20000],
            message: "select your amount",
            when(userinput) {
                return userinput.service == "fastcash";
            }
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount",
            when(userinput) {
                return userinput.service == "withdraw";
            }
        },
    ]);
    return userinput;
}
