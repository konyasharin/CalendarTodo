export type CurrentDate = {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  localeMonth: string;
};

function createCurrentDate(): CurrentDate {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    localeMonth: date.toLocaleString('default', { month: 'long' }),
  };
}

export default createCurrentDate;
