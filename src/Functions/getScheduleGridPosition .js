export const getScheduleGridPosition = (date) => {
  const startHour = 12;
  const slotMinutes = 10;

  const d = new Date(date);

  const day = d.getDay();

  let totalMins = (d.getHours() - startHour) * 60 + d.getMinutes();

  let gridRow = Math.round(totalMins / slotMinutes) + 1;

  if (d.getHours() < 12) {
    gridRow =
      Math.round(
        ((d.getHours() + startHour) * 60 + d.getMinutes()) / slotMinutes,
      ) + 1;
  }

  return {
    day,
    gridRow,
  };
};
