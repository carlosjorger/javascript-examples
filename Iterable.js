//NumberRange is a iterator of numbers from the range [i...j]
export class NumberRange {
  constructor(firstNumber, lastNumber) {
    this.firstNumber = firstNumber;
    this.lastNumber = lastNumber;
    this.currentValue = firstNumber;
  }
  // implement a iterator
  next() {
    if (this.currentValue <= this.lastNumber) {
      return { value: this.currentValue++, done: false };
    }
    return { value: undefined, done: true };
  }
  //  return the iterator that is the current object
  [Symbol.iterator]() {
    return this;
  }
}
