
function renderLicenseBadge(license) {

  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
   } 
   else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
   } 
   else return "";
}
function renderLicenseLink(license) {

  if (license === 'MIT') {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'Apache 2.0') {
    return `[License: MIT](https://opensource.org/licenses/Apache-2.0)`;
   }
   else return "";
}
function renderLicenseSection(license) {
  if(license !=="None"){
    return `* [License](#license)`
  }
  return ''
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;