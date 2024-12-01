// TODO: Include packages needed for this application
const fs = require('fs'); //its a node.js module helpd read write and manupulates the file. so my code can write to file from user input. we need this 
// i also need to ask question to user so i will use inquirer module to ask questions.
const inquirer = require ('inquirer');
// and i need generateMarkdown under utils folder to generate Markdown like formattion the text for readme file.
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project'

    }
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('README.md generated successfully!');
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
      });
}

// Function call to initialize app
init();
