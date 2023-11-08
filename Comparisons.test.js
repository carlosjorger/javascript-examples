import { expect, test } from "vitest";
import { scheduleMeeting } from "./Comparisons";
test("scheduleMeeting is working properly", () => {
  const dayStart = "07:30";
  const dayEnd = "17:45";
  expect(scheduleMeeting(dayStart, dayEnd, "7:00", 15)).toBe(false);
  expect(scheduleMeeting(dayStart, dayEnd, "07:15", 30)).toBe(false);
  expect(scheduleMeeting(dayStart, dayEnd, "7:30", 30)).toBe(true);
  expect(scheduleMeeting(dayStart, dayEnd, "16:50", 60)).toBe(false);
  expect(scheduleMeeting(dayStart, dayEnd, "11:30", 60)).toBe(true);
  expect(scheduleMeeting(dayStart, dayEnd, "17:00", 45)).toBe(true);
  expect(scheduleMeeting(dayStart, dayEnd, "17:30", 30)).toBe(false);
  expect(scheduleMeeting(dayStart, dayEnd, "18:00", 15)).toBe(false);
  expect(scheduleMeeting(dayStart, dayEnd, "16:36", 15)).toBe(true);
});
