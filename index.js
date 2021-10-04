// TODO: Include packages needed for this application
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = [
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "install",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "GPLv3",
                "MIT",
                "GPL",
                "N/A",
            ]
        },
        {
            type: "input",
            name: "contribute",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "testing",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, function(err, res){
        if (err) throw err;
        console.log("README generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(promptUser)
    .then((responses) => {
        console.log("All responces entered. Creating README.",responses)
        writeToFile('NewREADME.md', markdown(responses))
    })}

// Function call to initialize app
init();
