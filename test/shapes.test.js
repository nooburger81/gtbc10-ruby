const {Triangle, Square, Circle} = require("../lib/shapes");
//For some reason I cannot get my tests to run. I have jest installed. Don't know what I'm not seeing.
    describe('Triangle', () => {
        it ("test triangle render", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })})

    describe('Square', () => {
        it("test square render", () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<rect x="50" width='300' height='300' fill='blue'/>`);
        })})
    

    describe('Circle', () => {
        it ("test circle render", () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<circle cx='50%' cy='50% r='100' width='100%' fill='blue'/>`);
        })})