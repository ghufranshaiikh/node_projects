import inquirer from "inquirer";
  
let todolist:string[]=[];
let loop=true;
while (loop) {
    let answer:{todo:string,
    moretodo:boolean}= await inquirer.prompt([
        {
            type:"input",
            name:"todo",
            message:"what do you want to add in your todo list",
        },
        {
            type:"confirm",
             name:"moretodo",
             message:"Do you want to add more todos",
             default: false
        }
    ]);

     let {todo,moretodo}=answer;
     loop=moretodo;
     if(todo){
      todolist.push(todo)
     } else{
        console.log("enter valid todo ");
     }

     if(todolist.length>0){
       todolist.forEach(todo => {
       console.log(todo)
       });
    
     }else{
        console.log("empty todolist")
     }
    
}