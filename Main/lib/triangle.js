const Shape = require("./shape");

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `
            <svg id="triangle" width="300px" height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <polygon points="150,0 0,250 300,250" style="fill:${this.color}" />`
    }
}
module.exports = Triangle;
