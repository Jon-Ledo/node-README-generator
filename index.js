// Modules needed
const { readFile, writeFile } = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = require('./utils/questions')

// Creates the README file
function writeToFile(fileName, data) {
  writeFile(fileName, data, () => {
    console.log(data)
  })
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const dataToWrite = generateMarkdown(answers)

    writeToFile(`./${answers.title}-README.md`, dataToWrite)
  })
}

// Function call to initialize app
init()
