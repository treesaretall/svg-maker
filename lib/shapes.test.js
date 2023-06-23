const Triangle = require('./shapes.js').Triangle;
const Square = require('./shapes.js').Square;
const Circle = require('./shapes.js').Circle;


describe('Triangle',() => {
    test('checks rendering of triangle', () => {
        const shapeColor = 'blue';
        const triangle = new Triangle(shapeColor);

        const expectedShape = `<svg version="1.1" width="200" height="300" xmlns="http://www.w3.org/2000/svg"> <polygon points="100,50 0,200 200,200" fill="${shapeColor}"></polygon>`

        expect(triangle.render()).toEqual(expectedShape);
    })
})

describe('Square',() => {
    test('checks rendering of square', () => {
        const shapeColor = 'red';
        const square = new Square(shapeColor);

        const expectedShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" fill="${shapeColor}"> </rect>`

        expect(square.render()).toEqual(expectedShape);
    })
})

describe('Circle',() => {
    test('checks rendering of circle', () => {
        const shapeColor = 'yellow';
        const circle = new Circle(shapeColor);

        const expectedShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="100" fill="${shapeColor}"> </circle>`

        expect(circle.render()).toEqual(expectedShape);
    })
})