const Shape = require("./shape");

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
                <rect x="75" y="20" width="150" height="150"
                style="fill:${this.color}"/>`
    }
}
module.exports = Square;
