// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown.js");
const inquirer = require ('inquirer');
 const fs = require('fs');
 const path = require('path')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "github",
        type: "input",
        message:"What is your github username?"
    },
     {
        name:"email",
        type:"input",
        message:"What is your email?",
    },
    {
        name:"title",
        type:"input",
        message:"What is the title of your project?",
    },
    {
        name:"Contributing",
        type:"input",
        message:"Who are the contributors of the project?",
    },
    {
        name:"description",
        type:"input",
        message:"Describe the details of your project?",
    },
    {
        name:"motive",
        type:"input",
        message:"What was your motivation?",
    },
    
    {
        name:"problem", 
        type:"input",
        message:"What problem does it solve?",
    },
    {
        name:"learned", 
        type:"input",
        message:"What did you learn?",
    },
    {
        name:"license", 
        type:"list",
        message:"What type of license(choices) was chosen for your project?",
        choices:["MIT", "APACHE", "None"]
    },
    {
        name:"installation", 
        type:"input",
        message:"What are the steps for installation?",
    }

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userData) { console.log(userData)
        writeToFile("README.md", generateMarkdown(userData));
    });
};
 

// Function call to initialize app
init();
