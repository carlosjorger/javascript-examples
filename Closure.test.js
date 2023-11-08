import { expect, test } from "vitest";
import { range } from "./Closure";

test("range is working properly if both parameters are passed", () => {
  expect(range(3, 3)).toEqual([3]);
  expect(range(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
  expect(range(3, 0)).toEqual([]);
});
test("range is working properly if only the first parameter is passed", () => {
  var start3 = range(3);
  var start4 = range(4);
  expect(start3(3)).toEqual([3]);
  expect(start3(8)).toEqual([3, 4, 5, 6, 7, 8]);
  expect(start3(0)).toEqual([]);
  expect(start4(6)).toEqual([4, 5, 6]);
});
