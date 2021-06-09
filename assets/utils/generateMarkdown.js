// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}  
  ![License Badge](https://img.shields.io/badge/license-${data.license}-green)
  
  ## Description:  
  ${data.description}

  ## Table of Contents:  
  - [Description](##-description)
  - [Table of Contents](##-table-of-contents)
  - [Installation](##-installation)
  - [Usage](##-usage)
  - [License](##-license)
  - [Contributing](##-contributing)
  - [Tests](##-tests)
  - [Questions](##-questions)

  ## Installation:  
  ${data.installation}

  ## Usage:  
  ${data.usage}
  
  ## License:  
  Licensed under [${data.license}](./LICENSE)
  
  ## Contributing:  
  ${data.contributing}
  
  ## Tests:  
  ${data.tests}

  ![${data.title}](${data.imagepath})
  
  ## Questions:  
  Contact Me: [Github](https://gist.github.com/${data.githubuser}), or Email Me @${data.email}  
  Repository Link [${data.title}](${data.repo})


`;
}

module.exports = generateMarkdown;
