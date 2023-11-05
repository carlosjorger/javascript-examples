import { NumberRange } from "./Iterable.js";

var range = new NumberRange(0, 3);
for (const number of range) {
  console.log(number);
}
