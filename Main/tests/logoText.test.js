const LogoText = require('../lib/generateLogoText')

describe('Square', () => {
    it('Should generate a string that contains information for the construction of the text for the svg logo', () => {
        const logo = new LogoText("test", "green");
        expect(logo.render()).toEqual('<text x="150" y="125" font-size="50" font-family="monospace" letter-spacing="-2.5px" text-anchor="middle" fill="green">test</text></svg>');
    });
});
