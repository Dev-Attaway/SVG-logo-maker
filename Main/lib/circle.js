const Shape = require("./shape");

class Circle extends Shape
{
    constructor(color)
    {
        super(color);
    }
    render()
    {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
module.exports = Circle;
