// TODO: Include packages needed for this application
const generateMarkdown = require('utils/generateMarkdown.js');
const inquirer = require ('inquirer');
 const fs = require('fs');
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
        name:"why", 
        type:"input",
        message:"Why did you build this project?",
    },
    {
        name:"problem solving", 
        type:"input",
        message:"What problem does it solve?",
    },
    {
        name:"learned", 
        type:"input",
        message:"What did you learn?",
    },
    {
        name:"licenses", 
        type:"input",
        message:"What type of license(s) was chosen for your project?",
        choices:["MIT", "APACHE", "GPL", "None"]
    },
    {
        name:"installation", 
        type:"input",
        message:"What are the steps for installation?",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
