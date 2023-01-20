const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'userName',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        message: 'What is your email address?'
    },
    {
        name: 'projectName',
        message: 'What is your project name?'
    },
    {
        name: 'projectDescription',
        message: 'Please write short description of your project'
    },
    {
        type: 'list',
        name: 'projectLicence',
        message: 'What kind of licence should your project have', //user should see (Use arrow keys)
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
    },
    {
        name: 'dependeciesCommand',
        message: 'What command should be run to install dependecies?',
        default: 'npm i'
    },
    {
        name: 'testCommand',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        name: 'information',
        message: 'What does the user need to know about using the repo?'
    },
    {
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    }
];
//after the questions output 'Generating README...' 1:12 on the recording to see full pictrue of output

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => {
        if(err) return console.log(err);
    });
}

inquirer.prompt(questions).then((answer) => {
    console.log('Generating README...');
    writeToFile('test.txt',JSON.stringify(answer));
});

// function to initialize program
function init() {

}

// function call to initialize program
init();
