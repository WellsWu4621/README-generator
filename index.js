const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const generateMarkdown = require('./assets/utils/generateMarkdown')

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a brief description about your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What License are you using?',
    choices: ['Apache 2.0', 'MIT', 'GNU v3.0']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to your project?'
  },
  {
    type: 'confirm',
    name: 'imagecheck',
    message: 'Do you have an image displaying how your product works?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please describe a use of the product.'
  },
  {
    type: 'input',
    name: 'imagepath',
    message: 'What is the path to your image?'
  },
  {
    type: 'input',
    name: 'githubuser',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
];

// function to write README file
const writeToFile = (fileName, data) => {
  writeFile(fileName, data, err => {
    if (err) { console.log(err) }
    console.log('README.md Created!')
  })
}

// function to initialize program
function init() {
  prompt(questions)
    .then(info => {
      writeToFile('README.md', generateMarkdown(info))
    })
    .catch(err => console.log(err))
}

// function call to initialize program
init();
