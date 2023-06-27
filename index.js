const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const text = require('./lib/text.js')
const validateColor = require("validate-color").default;


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
        validate: function(response) {
          const colorCheck = response && validateColor(response) ? true: false;
          if (!colorCheck) {
            return "Not a valid color";
          }
          return true;
        }
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
        validate: function(response) {
          const colorCheck = response && validateColor(response) ? true: false;
          if (!colorCheck) {
            return "Not a valid color";
          }
          return true;
        }
    },
]
inquirer.prompt(questions).then((data) => {
    const fileName = 'logo.svg';
    const shapeType = data.shape;
    const shapeColor = data.shapeColor;
    const characters = data.characters.toUpperCase()
    const textColor = data.textColor
  
    let shape;
  
    if (shapeType === 'Triangle') {
      shape = new shapes.Triangle(shapeColor);
    } else if (shapeType === 'Square') {
      shape = new shapes.Square(shapeColor);
    } else if (shapeType === 'Circle') {
      shape = new shapes.Circle(shapeColor);
    }

    let textConst = new text.Text(characters,textColor)
  
    if (shape) {
      const shapeOutput = shape.render();
      const textOutput = textConst.render()
      const fileContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeOutput}${textOutput}</svg>`;
  
      fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    }
  });
