// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  if(licenseType === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (licenseType === 'GPLv3') {
    return `[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (licenseType === 'GPL') {
    return `[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)]`
  } else {
    return "N/A"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license
  if(licenseType === 'MIT') {
    return `Find out more [here]](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'GPLv3') {
    return `Find out more [here](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseType === 'GPL') {
    return `Find out more [here]](https://www.gnu.org/licenses/old-licenses/gpl-1.0.html)`
  } else {
    return "Link unavailable"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${license} is A short, permissive software license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # ${renderLicenseBadge(data.license)}
        
  ## Description
   ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)
     
  ## Installation
  ${data.install} 
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contribution
  ${data.contribute}
  ## Testing
  ${data.testing}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions
  My Github:
  https://github.com/${data.github}
  Reach out to me with questions at: ${data.email}
     
`;
}

module.exports = generateMarkdown;
