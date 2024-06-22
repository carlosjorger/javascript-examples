import { expect, test } from "vitest";
import { calculator, useCalc } from "./calculator";

test("calculator", () => {
  var calc = calculator();
  expect(calc("4")).toBe("4");
  expect(calc("+")).toBe("+");
  expect(calc("7")).toBe("7");
  expect(calc("3")).toBe("3");
  expect(calc("-")).toBe("-");
  expect(calc("2")).toBe("2");
  expect(calc("=")).toBe("75");

  expect(useCalc(calc, "4+3=")).toBe("4+3=7");
  expect(useCalc(calc, "+9=")).toBe("+9=16");
  expect(useCalc(calc, "*8=")).toBe("*8=128");
  expect(useCalc(calc, "7*2*3=")).toBe("7*2*3=42");
  expect(useCalc(calc, "1/0=")).toBe("1/0=ERR");
  expect(useCalc(calc, "+3=")).toBe("+3=ERR");
  expect(useCalc(calc, "51=")).toBe("51=51");
});
