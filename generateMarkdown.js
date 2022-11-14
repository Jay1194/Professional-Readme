
function renderLicenseBadge() {

  if (renderLicenseBadge.license === 'MIT') {
    return `[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
   } 
   else if (renderLicenseBadge.license === 'Apache') {
    return `[![license: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
   } 
}
function renderLicenseLink() {

  if (renderLicenseLink.license === 'MIT') {
    return "[license: MIT](https://opensource.org/licenses/MIT)";
  }
   if (renderLicenseLink.license === Apache) {
    return "[license: Apache (https://opensource.org/licenses/Apache-2.0)";
   }
}

function renderLicenseSection() {
  if(renderLicenseSection.license !=="None"){
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
  * [Questions](#Questions)

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