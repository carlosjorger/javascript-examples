import { expect, test } from "vitest";
import { scheduleMeeting } from "./Comparisons";
test("numberRange should be a iterator", () => {
  const dayStart = "07:30";
  const dayEnd = "17:45";
  expect(scheduleMeeting(dayStart, dayEnd, "7:00", 15)).toBe(false);
  expect(scheduleMeeting(dayStart, dayEnd, "07:15", 30)).toBe(false);
  expect(scheduleMeeting(dayStart, dayEnd, "7:30", 30)).toBe(true);
  expect(scheduleMeeting(dayStart, dayEnd, "16:50", 60)).toBe(false);
});
