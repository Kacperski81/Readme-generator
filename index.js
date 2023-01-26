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
        message: 'What kind of licence should your project have',
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


// display correct license badge
function checkBadges(data) {
    switch(data) {
        case ('MIT') :
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case ('APACHE 2.0') :
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case ('GPL 3.0') :
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case ('BSD 3') :
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case ('None') :
            return 'None'
            break;
        default :
            return ''
    }
}

// function to write README file
function writeToFile(fileName, data) {
    const badge = checkBadges(data.projectLicence);
    data.projectLicence = badge;
    console.log(data);
    const text = generateMarkdown(data);
    console.log(text);
    fs.writeFile(fileName,text,(err) => {
        if(err) return console.log(err);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answer) => {
        console.log('Generating README...');
        writeToFile('README.md',answer);
    });
}

// function call to initialize program
init();
