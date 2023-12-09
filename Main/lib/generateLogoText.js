class LogoText{
    constructor(logo, textColor)
    {
        this.logo = logo;
        this.LogoText = textColor;
    }
    render()
    {
        // returns a string with the string literals housing the variables grabbed 
        // by the constructor
        return `<text x="150" y="125" font-size="60" text-anchor="middle"
         fill="${this.textColor}">${this.logo}</text>
         </svg>`
    }
}





module.exports = LogoText;


 