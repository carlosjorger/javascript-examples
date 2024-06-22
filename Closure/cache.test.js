import { expect, test } from "vitest";
import { isPrime } from "./cache";
test("primes with caches", () => {
  expect(isPrime(5)).toBe(true);
  expect(isPrime(4327)).toBe(true);
  console.log(".....");
  expect(isPrime(4327)).toBe(true);
});
