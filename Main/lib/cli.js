// calling the inquier package
const inquirer = require('inquirer');

const generateSVG = require('./generateSVG');

const Shape = require('./shape');

// refer to https://www.npmjs.com/package/inquirer-maxlength-input-prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// a list of shapes for the user to choose from
let shapes = ['Circle', 'Triangle', 'Square'];
// const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

class CLI {
  constructor() {
    this.title = '';
    this.tasks = [];
  }
  
  // a CLI method 
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

        generateSVG.formatSVG(inquirer)

      });
  }
}

module.exports = CLI;
