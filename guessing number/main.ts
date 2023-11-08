#!/usr/bin/env node
import chalkAnimation from "chalk-animation";
 import chalk from "chalk";
 import inquirer from "inquirer";
  let randomnumber= Math.floor(Math.random()*10);
   console.log(chalk.bgWhite.black(`Let's start`));
    let i=1
     while (i<=3) {
        
     
 let guessgame=await  inquirer.prompt({
       type: "number",
        name:("guessnumber"),
        message:chalk.greenBright("guess your number"),        
 });
  let userguess= guessgame.guessnumber;
   console.log( chalk.red(`Your guessnumber is ${guessgame.guessnumber}`));
   console.log(chalk.cyan(`Computer generated number is ${randomnumber}`));
  if(randomnumber===userguess){
      (chalkAnimation.rainbow("Congratulation you win"));
       
      break;
      
      
 }
  else{
    
    console.log(chalk.red("Try again"));
  };
 i++;
   
}


