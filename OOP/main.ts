import inquirer from "inquirer"

class Student {
    name:string;
     constructor(name:string){
        this.name=name;
     }
}
class Person {
    students:Student[]=[];
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()

const start = async (persons:Person)=>{


    let name = await inquirer.prompt({
        type:"input",
        name: "fname",
        message: "drag your name ",
    })
    console.log(`welcome mr ${name.fname}`);
    do{ let ans = await inquirer.prompt({
        type:"list",
        name:"Selection",
        message:"With whom you want to talk..",
        choices:["self","student"],

    })

    if(ans.Selection==="self"){
        console.log("hello this is me and i am talking with myself and i am pretty fine ")
    }
    if(ans.Selection=="student"){
        let ans = await inquirer.prompt({
            type:"input",
            name:"student",
            message:"drag student name with whom you want to talk",
        })

        const student = persons.students.find(val => val.name == ans.student);
        
        if (!student){
            const name = new Student(ans.student);
            persons.addStudent(name)
             console.log(`hello i am ${name.name}, i am good`);
             console.log(persons.students);
        }
        if (student){
            console.log(`hello i am ${student.name}, i am good....`);
            console.log(persons.students);
        }  }}while(true);
     
   
    
    }


start(persons)