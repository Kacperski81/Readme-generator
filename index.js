const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const checkBadges = require("./utils/checkBadges");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
function writeToFile(fileName, data) {
    const badge = checkBadges(data.projectLicence);
    data.projectLicence = badge;
    // console.log(data);
    const text = generateMarkdown(data);
    // console.log(text);
    fs.writeFile(fileName,text,(err) => {
        if(err) return console.log(err);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answer) => {
        console.log('Generating README...');
        writeToFile('./generatedReadme/README.md',answer);
    });
}

// function call to initialize program
init();
