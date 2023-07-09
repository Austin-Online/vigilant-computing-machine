// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license !== 'none') {
    badge = '![Static Badge](https://img.shields.io/badge/No_License' + license + ')';
  }
  return badge;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'Eclipse':
      licenseLink = 'https://www.eclipse.org/legal/epl-2.0/';
      break;
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT/';
      break;
    default:
      licenseLink = '';
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  const licenseSection = license !== 'none'
  ? `## License
This project is licensed under the ${license} license. Please refer to [${renderLicenseLink(license)}](#${license.toLowerCase().replace(/\s+/g, '-')}) for more details.`
  : `## License
None`;

return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.use}

## Contributing
${data.contribution}

## License
${renderLicenseBadge(data.license)}  
${renderLicenseSection(data.license)}  
${renderLicenseLink(data.license)}

## Questions
For any questions, please contact me:

GitHub: [${data.username}](https://github.com/${data.username})  
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
