/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(area, circumference, radius) {
    super(area, circumference, radius);
    this.radius = radius;
  }

  getValues() {
    console.log(`My radius is ${this.radius}`);
  }
}

const coin = new Circle(38.48, 21.99, 3.5);

coin.getValues();
