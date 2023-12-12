// establish the shape class which the shapes will be inheritting 
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(pickedColor) {
        this.color = pickedColor;
    }
}
module.exports = Shape;
