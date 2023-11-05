import { expect, test } from "vitest";
import { NumberRange } from "./Iterable";

test("numberRange should be a iterator", () => {
  var range = new NumberRange(0, 3);
  expect(range.next().value).toBe(0);
  expect(range.next().value).toBe(1);
  expect(range.next().value).toBe(2);
  expect(range.next().value).toBe(3);
  expect(range.next().value).toBeUndefined();
  expect(range.next().value).toBeUndefined();
});
test("numberRange should be a iterable", () => {
  var range = new NumberRange(0, 3);
  expect(() => {
    for (const number of range) {
      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThanOrEqual(3);
    }
  }).not.toThrowError();
});
