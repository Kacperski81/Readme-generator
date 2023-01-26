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

module.exports = questions;