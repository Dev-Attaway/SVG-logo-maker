
// want to pass a function that will return the SVG specifiers
function formatSVG(svgData) {
    const logo = this.logo
    const textColor = this.textColor
    const shape = this.shape
    const shapeColor = this.shapeColor

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logo}</text>
  </svg>`;
  
  }
  module.exports = { formatSVG };
