const Square = require('../lib/square')

describe('Square', () => {
    it('Should generate a string that contains information for construction the svg in html syntax', () => {

        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="75" y="20" width="150" height="150" fill="green"/>');
    });
});
