const Shape = require('../lib/shape');

describe('Shape', () => {
    it('Should generate a shape object with a test color', () => {

        const shape = new Shape();
        shape.setColor("green");
        expect(typeof shape == 'object');
    });
});
