// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // getter for width
  get width() {
    return this._width;
  }

  // getter for height
  get height() {
    return this._height;
  }

  // area
  getArea() {
    return this._width * this._height;
  }
}

// Square class (inherit)
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // width = height = side
  }

  // perimeter
  getPerimeter() {
    return this.width * 4;
  }
}

// Do not change
window.Rectangle = Rectangle;
window.Square = Square;