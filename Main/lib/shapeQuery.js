const Circle = require('./circle')
const Triangle = require('./triangle')
const Square = require('./square')
const FileWrite = require('fs');

class ShapeQuery {
    findShape(shape, shapeColor) {
        let foundShape;

        // returning the foundShape based on the value of the variable shape
        // this shape is also created and given a color based on the value of shapeColor
        switch (shape) {
            case 'Circle':
                foundShape = new Circle(shapeColor);
                break;

            case 'Triangle':
                foundShape = new Triangle(shapeColor);
                break;

            case 'Square':
                foundShape = new Square(shapeColor);
                break;
        }
        return foundShape;
    }

    writeToFile(data) {

        // a filename is created which has the address of ./README.md, which
        //  doesn't exist in this moment 
        const filename = "output/logo.svg";

        // method is used to asynchronously write the specified data to a file.
        // By default, the file would be replaced if it exists. 

        FileWrite.writeFile(filename, data, function (err) {
            err ? console.log(err) : console.log(filename + " created!")

            // file: It is a string, Buffer, URL or file description integer that denotes
            // the path of the file where it has to be written. 
            // data: It is a string, Buffer, TypedArray or DataView that will be written to the file.
            // function (err) will display an error if the write didn't occur otherwise
            // it will display the success message 'filename +  created!'
        });
    }

    formatSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }
}
module.exports = ShapeQuery;
