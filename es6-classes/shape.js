/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  getValues() {
    console.log(`My values, area = ${this.area} and circumference = ${this.circumference}.`);
  }
}

const polygon = new Shape(10, 5);

polygon.getValues();
