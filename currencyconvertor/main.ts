import inquirer from "inquirer";
 import { countries } from "./country.js";
 let loop = true;

 while (loop) {
    

 

  let answer:{
    Basecurrency:"PKR"|"GBP"|"USD",
    Targetcuurency:"PKR"|"GBP"|"USD",
    Amount:number,
    Again:boolean

  }=await inquirer.prompt([
    {
        type:"list",
        name:"Basecurrency",
        choices:["PKR","GBP","USD"],
        message:"Select your Basecurrency currency"

    },
    {
        type: "number",
        name:"Amount",  
        message:"Select your Amount"

    },

    {
        type:"list",
        name:"Targetcuurency",
        choices:["PKR","GBP","USD"],
        message:"Select your Targetcuurency currency"

    },
    {
        type:"confirm",
        name: "Again",
        message:"Do you want to use again",
        default: false
    }
    
  ])

   
  let {Basecurrency,Targetcuurency,Amount,Again}=answer;
  loop=Again

  if(Basecurrency&&Targetcuurency&&Amount){
    let result= countries[Basecurrency][Targetcuurency]*Amount;
     console.log(`your conversion amount from ${Basecurrency} to ${Targetcuurency} is ${result}`)
  } else{
     console.log("invalid inputs")
  }}

