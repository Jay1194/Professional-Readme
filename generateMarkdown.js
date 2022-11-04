
function renderLicenseBadge(license) {

  if (license === 'MIT') {
    return `[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
   } 
   else if (license === 'Apache') {
    return `[![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
   } 
}
function renderLicenseLink(license) {

  if (license === 'MIT') {
    return `[license: MIT](https://opensource.org/licenses/MIT)`;
  }
   if (license === 'Apache') {
    return `[license: MIT](https://opensource.org/licenses/Apache-2.0)`;
   }
}
function renderLicenseSection(license) {
  if(license !=="None"){
    return `* [license](#license)`
  }
  return "None"
}
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [License](#license)
  * [Usage](#usage)   
  * [Questions/Inquiries](#Questions/Inquiries)

  # Description
${data.description}

# Installation
${data.installation}

# Licenses
${data.license}

# Usage
${data.why}

# Questions

# Motive
${data.motive}

# Problem Solving
${data.problem}

# Contributing
${data.contributing}

 # Github
${data.github}

# Email
${data.email}


  `;
  }

  module.exports = generateMarkdown;