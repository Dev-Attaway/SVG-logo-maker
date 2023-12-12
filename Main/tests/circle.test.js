const Circle = require('../lib/circle')

describe('Circle', () => {
    it('Should generate a string that contains information for construction the svg in html syntax', () => {

        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
    });
});
