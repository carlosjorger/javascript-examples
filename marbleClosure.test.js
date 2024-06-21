import { expect, test } from "vitest";
import { getColors } from "./marbleClosure";
test("marbles", () => {
  const marbles = [
    {
      count: 2,
      color: "red",
      size: "small",
    },
    {
      count: 3,
      color: "black",
      size: "small",
    },
    {
      count: 1,
      color: "black",
      size: "big",
    },
    {
      count: 4,
      color: "red",
      size: "big",
    },
  ];
  const mapedMarbles = getColors(marbles);
  const { count, colorCount, sizeCount } = mapedMarbles({
    color: "red",
    size: "small",
  });
  expect(count).toBe(2);
  expect(colorCount).toBe(6);
  expect(sizeCount).toBe(5);
});
