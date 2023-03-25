/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super();
    this.width = width;
    super.area = width * width;
    super.circumference = width * 4;

  }

  print() {
    return `${super.print()} and width is ${this.width}`;
  }
}

const karat = new Square(4);

console.log(karat.print());
