// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ### My motivations
  ${data.reason}

  ### What problem does it solve?
  ${data.problem}

  ### What I learned
  ${data.learn}

  ## Preview 
  <!-- include a preview image for your readers -->
  ![your-project-preview-image](./Assets/)

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Badges

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Questions
  How to get into contact with me?
  
  [My Github Profile](https://github.com/${data.username})

  Email : ${data.email}

`
}

module.exports = generateMarkdown
