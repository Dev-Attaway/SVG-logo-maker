class LogoText {
    constructor(logo, textColor) {
        this.logo = logo;
        this.LogoColor = textColor;
    }
    render() {
        // returns a string with the string literals housing the variables grabbed 
        // by the constructor
        return `<text x="146" y="125" font-size="50" font-family="monospace" letter-spacing="-2.5px" text-anchor="middle" fill="${this.LogoColor}">${this.logo}</text></svg>`
    }
}
module.exports = LogoText;


