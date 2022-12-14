var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Using the inquirer npm this array of obj contains the questions that are asked in the application
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Project Title:',
        default: "My Project"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description:',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Installation Information:',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Usage Information:',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Contribution Guidelines:',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Test Instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License is Your Project Under?',
        choices: [
            'Apache License 2.0',
            'GNU GPLv3',
            'GNU AGPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Boost Software License 1.0',
            'MIT License',
            'ISC License',
            'The Unlicense',
        ],
        default: "MIT License"
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'Github Username:',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Email Address:',
    }
];

// Once the application begins it will run the following function which asks the questions above
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            generateMarkdown(answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Could not be rendered in current environment")
            } else {
                console.log("Something went horribly wrong")
                console.log(error)
            }
        });
}

// Function call to initialize app
init();
