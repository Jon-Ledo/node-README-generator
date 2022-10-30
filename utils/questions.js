const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter your project title',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'description',
    message:
      'Provide a short description explaining the what, why, and how of your project',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'reason',
    message:
      'What was your motivation and reasaoning to build this project? (Note: the answer is not "Because it was a homework assignment.")',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn?',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'credits',
    message:
      'List any collaborators, any third party assets or links to tutorials used',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'list',
    name: 'license',
    message: 'Would license are you using?',
    choices: [
      'Apache License 2.0',
      'GNU General Public License',
      'ISC License',
      'MIT License',
      'none',
    ],
    filter(choice) {
      return choice
    },
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How would you like other developers to contribute?',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'testing',
    message: 'Write tests for your application and provide examples',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your github username',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter the email you wish to be contacted with',
    validate(value) {
      if (value) {
        return true
      }
      return `${this.message}`
    },
  },
]

module.exports = questions
