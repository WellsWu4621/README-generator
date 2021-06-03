// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
  ${data.badge}
  
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
  ${data.license}

  ## Contributing:  
  ${data.contributing}

  ## Tests:  
  ${data.tests}

  ## Questions:  
  ${data.questions}


`;
}

module.exports = generateMarkdown;
