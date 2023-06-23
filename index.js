const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'What characters would you like on your logo?',
        suffix: ' (Maximum 3)',
        validate: function validate(response) {
            const done = this.async();
            if (response.length > 3) {
              done('Maximum 3 characters');
            } else if (response.length === 0) {
                done('Must have some characters');
            } else{
                done(null, true);
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?',
        suffix: ' (Keyword or hexadecimal)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Square', 'Triangle', 'Circle',],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
        suffix: ' (Keyword or hexadecimal)',
    },
];

inquirer.prompt(questions)
.then((data) => {
    const fileName = "logo.svg";
    const fileContent = 
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
    
    
    
    fs.writeFile(fileName, fileContent, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});
