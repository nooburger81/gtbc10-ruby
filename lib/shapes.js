class Shape {
    constructor() {
        this.color = "";
    }

setColor(color) {
    this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        console.log("triangle");
        return `<polygon height='100%' width='100%' points='0,200 300,200 150,0' fill='${this.color}'/>`
        }
    }

    class Square extends Shape {
        render() {
            console.log("square");
            return `<rect x="50" width='300' height='300' fill='${this.color}'/>`
        }
    }

    class Circle extends Shape {
        render() {
            console.log("circle");
            return `<circle cx='50%' cy='50% r='100' width='100%' fill='${this.color}'/>`
        }
    }
    module.exports = { Shape, Triangle, Square, Circle };