const inquirer = require('inquirer');
const logoGen = require('./lib/logoGen');
const { Triangle, Square, Circle } = require('./lib/shapes');
const { writeFile } = require('fs').promises;



//Questions to prompt the user for input to generate a logo
const questions = [
    {
        type: 'list',
        name: 'shapeType',
        message: 'Please select a shape for your logo',
        choices: ['Triangle', 'Square', 'Circle'],
        },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color for your shape, either by keyword or hexidecimal number',
        },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters for your logo text',
        },
    {
        type: 'input',
        name:'textColor',
        message: 'Please enter a color for your logo text, either by keyword or hexidecimal number',
        },
    ];

