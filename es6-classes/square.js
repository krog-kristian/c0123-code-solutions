/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(area, circumference, width) {
    super(area, circumference, width);
    this.width = width;
  }

  getValues() {
    console.log(`My width is ${this.width}`);
  }
}

const karat = new Square(16, null, 4);

karat.getValues();
