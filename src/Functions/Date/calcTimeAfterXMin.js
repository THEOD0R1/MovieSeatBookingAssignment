import { formatDateToYYYYMMDDTHHMM } from "./formatDateToYYYYMMDDTHHMM ";

export const calcTimeAfterXMin = (time, min) => {
  const newTime = new Date(time.getTime());

  newTime.setMinutes(newTime.getMinutes() + +min);
  return formatDateToYYYYMMDDTHHMM(newTime);
};
