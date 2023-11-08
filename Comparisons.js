export const scheduleMeeting = (
  dayStart,
  dayEnd,
  startTime,
  durationMinutes
) => {
  const [hourStart, minuteStart] = getHourAndMinutes(dayStart);
  const [hourEnd, minuteEnd] = getHourAndMinutes(dayEnd);
  const [hourCurrent, minuteCurrent] = getHourAndMinutes(startTime);
  if (hourStart > Number(hourCurrent) || hourEnd < Number(hourCurrent)) {
    return false;
  }
  if (hourStart == Number(hourCurrent) && minuteCurrent < minuteStart) {
    return false;
  }
  const restMinuteEndMeeting = Number(minuteCurrent) + durationMinutes;
  const hourEndMeeting =
    Number(hourCurrent) + Math.floor(restMinuteEndMeeting / 60);
  const minuteEndMeeting = restMinuteEndMeeting % 60;
  if (hourEndMeeting > hourEnd) {
    return false;
  }
  if (hourEnd == hourEndMeeting && minuteEndMeeting > minuteEnd) {
    return false;
  }
  return true;
};
const getHourAndMinutes = (date) => {
  return date.split(":");
};
