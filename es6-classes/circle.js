/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    super.circumference = 2 * Math.PI * radius;
    super.area = Math.PI * (radius * radius);
  }

  print() {
    return `${super.print()} and radius = ${this.radius}`;
  }
}

const coin = new Circle(3.5);

console.log(coin.print());
