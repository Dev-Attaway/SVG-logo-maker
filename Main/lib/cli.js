// calling the inquier package
const inquirer = require('inquirer');
const shapeQuery = require('./shapeQuery.js');
const LogoText = require('./generateLogoText.js');



// refer to https://www.npmjs.com/package/inquirer-maxlength-input-prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// a list of shapes for the user to choose from
let shapes = ['Circle', 'Triangle', 'Square'];
// const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

class CLI {

  // this function will be called in the index. js
  run() {

    // returning the data from inquirer's prompt
    return inquirer
      .prompt([
        {
          type: 'maxlength-input',
          name: 'logo',
          message: 'Please enter your 3 character text: ',
          maxLength: 3
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter a color for your text OR a hexadecimal number: ',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Please choose a background shape: ',

          // ['circle', 'triangle', 'square'] is loaded into choices 
          choices: shapes
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please enter a color for your shape OR a hexadecimal number: ',
        },
      ])
      .then((inquirer) => {
        console.log('Generated logo.svg');
        // we are passing the inquirer data to the function formatSVG
        // found in generateSVG.js
        const currentShape = new shapeQuery();
        const loadedLogoText = new LogoText(inquirer.logo, inquirer.textColor);

        // passing the data grabbed from inquirer to the class object currentShape
        // whose function findShape will determine, create, and return the shape class 
        // selected by the user
        let ldShape = currentShape.findShape(inquirer.shape, inquirer.shapeColor)
        currentShape.writeToFile(currentShape.formatSVG() + ldShape.render() + loadedLogoText.render());
      });
  }
}

module.exports = CLI;
