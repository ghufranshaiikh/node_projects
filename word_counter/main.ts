import inquirer from "inquirer"

function counter(paragraph:string){
  let freewhitespace = paragraph.replace(/\s/g,"")
  return freewhitespace.length
}

async function startWordCount(counter:(text:string)=>number) {
let res = await inquirer.prompt({
  type:"input",
  name: "paragraph",
  message:"write paragraph here ",
})
  console.log(counter(res.paragraph))
}

startWordCount(counter)