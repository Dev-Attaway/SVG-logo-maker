const Shape = require("./shape");

class Square extends Shape
{
    constructor(color)
    {
        super(color);
    }
    render()
    {
     return  `<rect x="50" y="20" width="150" height="150"
                style="fill: ${this.color}"/>`
    }
}
module.exports = Square;
