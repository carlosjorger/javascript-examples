import { expect, test } from "vitest";
import { toggle } from "./Toggle";

test("toggle ", () => {
  var hello = toggle("hello");
  var onOff = toggle("on", "off");
  var speed = toggle("slow", "medium", "fast");

  expect(hello()).toBe("hello");
  expect(hello()).toBe("hello");
  expect(hello()).toBe("hello");

  expect(onOff()).toBe("on");
  expect(onOff()).toBe("off");
  expect(onOff()).toBe("on");

  expect(speed()).toBe("slow");
  expect(speed()).toBe("medium");
  expect(speed()).toBe("fast");
  expect(speed()).toBe("slow");
});
