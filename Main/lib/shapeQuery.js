const Circle = require('./circle')
const Triangle = require('./triangle')
const Square = require('./square')

class ShapeQuery {

    findShape(shape ,shapeColor) {
        let foundShape;

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
}
module.exports = ShapeQuery;
