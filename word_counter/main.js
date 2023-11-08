import inquirer from "inquirer";
function counter(paragraph) {
    let freewhitespace = paragraph.replace(/\s/g, "");
    return freewhitespace.length;
}
async function startWordCount(counter) {
    let res = await inquirer.prompt({
        type: "input",
        name: "paragraph",
        message: "write paragraph here ",
    });
    console.log(counter(res.paragraph));
}
startWordCount(counter);
