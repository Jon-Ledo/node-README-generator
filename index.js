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

// Creates the README file
function writeToFile(fileName, data) {
  writeFile(fileName, data, () => {
    console.log(data)
  })
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const titledata = generateMarkdown(answers)

    writeToFile('./sample-README.md', titledata)
  })
}

// Function call to initialize app
init()

// [
//   {
//     title: 'node',
//     tableOfContents: true,
//     description: 'cool',
//     installation: true,
//     usage: true,
//     license: 'MIT',
//     contribution: true,
//     testing: true,
//     username: 'nope',
//   }
// ]
