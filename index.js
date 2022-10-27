// Modules needed
const { readFile, writeFile } = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Write your project title',
    validate(value) {
      if (value) {
        return true
      }
      return `Please enter a project title`
    },
  },
  {
    type: 'confirm',
    name: 'tableOfContents',
    message: 'Would you like a Table of Contents?',
    default: true,
  },
  {
    type: 'input',
    name: 'description',
    message: 'In one sentence, can you describe what your project is?',
    validate(value) {
      if (value) {
        return true
      }
      return `Please enter your project description`
    },
  },
  {
    type: 'confirm',
    name: 'installation',
    message: 'Do you need an Installation section?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'usage',
    message: 'Would you like a Usage section?',
    default: true,
  },
  {
    type: 'list',
    name: 'license',
    message: 'Would license are you using?',
    choices: ['none', 'MIT'],
    filter(choice) {
      return choice
    },
  },
  {
    type: 'confirm',
    name: 'contribution',
    message: 'Would you like a "How to Contribute" section?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'testing',
    message: 'Would you like a "Testing" section?',
    default: true,
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your github username',
    validate(value) {
      if (value) {
        return true
      }
      return `Please enter your github username`
    },
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then((answers) => {
    // returns an array, with the answers object
    console.log([answers])
  })
}

// Function call to initialize app
init()
