import { expect, test } from "vitest";
import { moduleCalulator, useCalc } from "./moduleCalculator";
test("module calculator", () => {
  expect(useCalc(moduleCalulator, "4+3=")).toBe("4+3=7");
  expect(useCalc(moduleCalulator, "+9=")).toBe("+9=16");
  expect(useCalc(moduleCalulator, "*8=")).toBe("*8=128");
  expect(useCalc(moduleCalulator, "7*2*3=")).toBe("7*2*3=42");
  expect(useCalc(moduleCalulator, "1/0=")).toBe("1/0=ERR");
  expect(useCalc(moduleCalulator, "+3=")).toBe("+3=ERR");
  expect(useCalc(moduleCalulator, "51=")).toBe("51=51");
});
