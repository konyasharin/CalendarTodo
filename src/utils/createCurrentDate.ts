export type CurrentDate = {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
};

function createCurrentDate(): CurrentDate {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };
}

export default createCurrentDate;
