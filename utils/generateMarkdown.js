const { makeBadge } = require('badge-maker')
const { writeFile } = require('fs')

// creates an svg badge using badge-maker npm
function renderLicenseBadge(license) {
  if (license === 'none') {
    return
  } else {
    const format = {
      label: 'license',
      message: license,
      color: 'brightgreen',
      style: 'flat',
    }

    const svg = makeBadge(format)
    return svg
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // https://choosealicense.com/licenses/mit/
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generates the markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)

  // create the SVG in the root
  writeFile(`./license-badge.svg`, badge, (err) => {
    if (err) {
      console.log(err)
      return err
    }
  })

  return `
  # ${data.title}
  ${badge ? '![license badge](./license-badge.svg)' : ''}

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
