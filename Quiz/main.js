// import inquirer from "inquirer"
//  const apilink:string='https://opentdb.com/api.php?amount=5&category=18&difficulty=easy'
//  let fetchdata =async (data:string)=>{
//     let fetchquiz:any= await fetch(data);
//     let res= await fetchquiz.json();
//     return res.results;
//  }
//  let data = await fetchdata(apilink);
//  let startquiz= async ()=>{
//     let score:number=0
//     let name = await inquirer.prompt({
//         type:"input",
//         name: "fname",
//         message:"what is your name"
//     })
//      for(let i =1;i<=5;i++){
//         let answer= [...data[i].incorrect_answers,data[i].correct_answer]
//         let ans = await inquirer.prompt({
//             type:"list",
//             name:"quiz",
//             message:data[i].question,
//             choices:answer.map((val:any)=>val)
//         })
//        if(ans.quiz===data[i].correct_answer){
//         score++;
//        }
//      }
//    console.log(score)
//  }
//  startquiz()
import inquirer from "inquirer";
import fetch from "node-fetch";
import chalk from "chalk";
const apilink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy";
const fetchdata = async (data) => {
    let fetchquiz = await fetch(data);
    let res = await fetchquiz.json();
    return res.results;
};
const startQuiz = async () => {
    let data = await fetchdata(apilink);
    let score = 0;
    let name = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: chalk.yellowBright.bold("What is your name?"),
    });
    console.log(chalk.bold.italic.blue(name.fname));
    for (let i = 0; i < data.length; i++) {
        let answer = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answer.map((val) => val),
        });
        if (ans.quiz === data[i].correct_answer) {
            score++;
            console.log(chalk.bold.italic.blue("correctanswer"));
        }
        else {
            console.log(chalk.bold.italic.red(`Incorrect! The correct answer is: ${chalk.bold.italic.greenBright(data[i].correct_answer)}`));
        }
    }
    let grade;
    if (score === 5) {
        grade = "A";
    }
    else if (score === 4) {
        grade = "B";
    }
    else if (score === 3) {
        grade = "C";
    }
    else if (score === 2) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    console.log(chalk.bold.blue(`Congratulations, Mr. ${chalk.bold.green(name.fname)}! Your score is: ${chalk.bold.red(score)} out of ${chalk.bold.green(5)}. Your grade is: ${chalk.bold.green(grade)}`));
};
startQuiz();
