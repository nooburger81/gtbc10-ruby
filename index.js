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

//Creating the shape and writing it to a file
inquirer.prompt(questions).then(({ text, textColor, shapeType, shapeColor }) => {
    let shape;

    switch (shapeType) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        default: 
            shape = new Square();
            break;
    }
shape.setColor(shapeColor)
    const svg = new logoGen()
    svg.setText(text, textColor)
    svg.setShape(shape)
    return writeFile("./examples/logo.svg", svg.render())
})
    .then(() => console.log("Generated logo.svg"))