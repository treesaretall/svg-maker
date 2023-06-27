const Triangle = require('./shapes.js').Triangle;
const Square = require('./shapes.js').Square;
const Circle = require('./shapes.js').Circle;


describe('Triangle',() => {
    test('checks rendering of triangle', () => {
        const shapeColor = 'blue';
        const triangle = new Triangle(shapeColor);

        const expectedShape = `<polygon points="150,50 50,200 250,200" fill="${shapeColor}"></polygon>`

        expect(triangle.render()).toEqual(expectedShape);
    })
})

describe('Square',() => {
    test('checks rendering of square', () => {
        const shapeColor = 'red';
        const square = new Square(shapeColor);

        const expectedShape = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}"></rect>`

        expect(square.render()).toEqual(expectedShape);
    })
})

describe('Circle',() => {
    test('checks rendering of circle', () => {
        const shapeColor = 'yellow';
        const circle = new Circle(shapeColor);

        const expectedShape = `<circle cx="150" cy="150" r="100" fill="${shapeColor}"> </circle>`

        expect(circle.render()).toEqual(expectedShape);
    })
})