import { expect, test } from "vitest";
import { slotMachine } from "./Prototypes";

test("slotMachine is working properly if both parameters are passed", () => {
  slotMachine.spin();
  console.log(slotMachine.display());
});
