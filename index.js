// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would someone install your project?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How does someone use your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for your project?',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who contributed to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would someone test your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

inquirer.prompt(questions)
.then((data) => {
    const fileName = "created-readme.md";
    const fileContent = 
    `![Static Badge](https://img.shields.io/badge/License-${data.license}-brightgreen) ![Static Badge](https://img.shields.io/badge/GitHub-${data.github}-blue)

# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
    ${data.description}

## Installation
    ${data.installation}
    
## Usage
    ${data.use}
    
## License
    ${data.license}
    
## Contributing
    ${data.contribute}

## Tests
    ${data.test}
    
## Questions
    If you have any questions please feel free to reach out to me via email at: ${data.email} or my Github at: github.com/${data.github}`

    fs.writeFile(fileName, fileContent, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});
