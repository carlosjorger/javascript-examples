export const scheduleMeeting = (
  dayStart,
  dayEnd,
  startTime,
  durationMinutes
) => {
  const [hourStart, minuteStart] = getHourAndMinutes(dayStart);
  const [hourEnd, minuteEnd] = getHourAndMinutes(dayEnd);
  const [hourStartMeeting, minuteStartMeeting] = getHourAndMinutes(startTime);
  if (
    hourStart > Number(hourStartMeeting) ||
    (hourStart == Number(hourStartMeeting) && minuteStartMeeting < minuteStart)
  ) {
    return false;
  }
  const restMinuteEndMeeting = Number(minuteStartMeeting) + durationMinutes;
  const hourEndMeeting =
    Number(hourStartMeeting) + Math.floor(restMinuteEndMeeting / 60);
  const minuteEndMeeting = restMinuteEndMeeting % 60;
  if (
    hourEnd < hourEndMeeting ||
    (hourEnd == hourEndMeeting && minuteEndMeeting > minuteEnd)
  ) {
    return false;
  }
  return true;
};

const getHourAndMinutes = (date) => {
  return date.split(":");
};
