const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');


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
        // validate: function isColor(response){
        //     const done = this.async();
        //     var s = new Option().style;
        //     s.color = response;
        //     if ((s.color == response) === false) {
        //       done('Not a valid color');
        //     } else{
        //         done(null, true);
        //     }}
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

inquirer.prompt(questions).then((data) => {
    const fileName = 'logo.svg';
    const shapeType = data.shape;
    const shapeColor = data.shapeColor;
  
    let shape;
  
    if (shapeType === 'Triangle') {
      shape = new shapes.Triangle(shapeColor);
    } else if (shapeType === 'Square') {
      shape = new shapes.Square(shapeColor);
    } else if (shapeType === 'Circle') {
      shape = new shapes.Circle(shapeColor);
    }
  
    if (shape) {
      const fileContent = shape.render();
  
      fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Success!');
        }
      });
    }
  });
