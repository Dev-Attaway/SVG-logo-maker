const Triangle = require('../lib/triangle')
describe('Triangle', () => {
    it('Should generate a string that contains information for construction the svg in html syntax', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});