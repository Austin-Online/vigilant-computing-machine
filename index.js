// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Write a description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps needed to get your environment running?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What instructions are required to use your application?',
    name: 'use',
  },
  {
    type: 'input',
    message: 'List any contributors that need to be given credit',
    name: 'contribution',
  },
  {
    type: 'list',
    message: 'What license is this application being used under?',
    name: 'license',
    choices: ["Apache", "Eclipse", "MIT", "N/A"]
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(response) {
  const markdown = generateMarkdown(response);

  const fileName = 'sample.md';

  fs.writeFile(fileName, markdown, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Successfully generated README.md!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => writeToFile(response));
}

// Function call to initialize app
init();
