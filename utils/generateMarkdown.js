const { makeBadge } = require('badge-maker')
const { writeFile } = require('fs')

// creates an svg badge using badge-maker npm
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
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

// get license links using conditionals
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return `https://choosealicense.com/licenses/apache-2.0/`
  } else if (license === 'GNU General Public License') {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  } else if (license === 'ISC License') {
    return `https://choosealicense.com/licenses/isc/`
  } else if (license === 'MIT License') {
    return `https://choosealicense.com/licenses/mit/`
  } else return ' '
}

// creates markdown for licensing section
function renderLicenseSection(license, badge, link) {
  if (license === 'none') {
    return 'No license at this time'
  } else {
    return `
  [${badge ? '![license badge](./license-badge.svg)' : ''}](${link})

  For more information about the licensing of this project, please click on the badge above, or follow this link ${link}
  `
  }
}

// Generates the markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)
  const hasLicenseSection = renderLicenseSection(
    data.license,
    badge,
    licenseLink
  )

  // create the SVG in the root
  writeFile(`./license-badge.svg`, badge, (err) => {
    if (err) {
      console.log(err)
      return err
    }
    if (badge === '') {
      return
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
  ${hasLicenseSection}

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
