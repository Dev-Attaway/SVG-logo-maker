const ShapeQuery = require('../lib/shapeQuery');
const Circle = require('../lib/circle');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');

describe('ShapeQuery', () => {
    describe('findShape', () => {
        // testing all the cases in which a Circle, Triangle, or Square object can be generated
        it('Should create an object "shape" based on the parameter given', () => {
            const test_string = 'Circle';
            const color = 'green';
            const shapeQuery = new ShapeQuery();

            // Use .toBeInstanceOf(Class) to check that an object is an instance of a class. This matcher uses instanceof underneath.
            expect(shapeQuery.findShape(test_string, color)).toBeInstanceOf(Circle);
        });

        it('Should create an object "shape" based on the parameter given', () => {
            const test_string = 'Triangle';
            const color = 'green';
            const shapeQuery = new ShapeQuery();
            expect(shapeQuery.findShape(test_string, color)).toBeInstanceOf(Triangle);
        });

        it('Should create an object "shape" based on the parameter given', () => {
            const test_string = 'Square';
            const color = 'green';
            const shapeQuery = new ShapeQuery();
            expect(shapeQuery.findShape(test_string, color)).toBeInstanceOf(Square);
        });
    });

    describe('formatSVG', () => {
        it('Should create a svg html tag', () => {
            const shapeQuery = new ShapeQuery();
            expect(shapeQuery.formatSVG()).toEqual( '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
        });
    });
});

// describe('formatSVG', () => {
//     it('Should create a svg file with data grabbed from the user ', () => {
//         const test_data = 'test';
//         const shapeQuery = new ShapeQuery();
//         // we expect
//         console.log(typeof shapeQuery.writeToFile(test_data))
//         expect( shapeQuery.writeToFile(test_data));
//     });

// async issue
// ----------------------------------------------------------------------------------------------
// ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
// Attempted to log "output/logo.svg created!".

//   28 |     writeToFile(data) {
//   29 |
// > 30 |         // a filename is created which has the address of ./README.md, which
//      |                                        ^
//   31 |         //  doesn't exist in this moment
//   32 |         const filename = "output/logo.svg";
//   33 |

//   at console.log (node_modules/@jest/console/build/BufferedConsole.js:187:10)
//   at lib/shapeQuery.js:30:40
//   at node_modules/graceful-fs/graceful-fs.js:61:1
// ----------------------------------------------------------------------------------------------


