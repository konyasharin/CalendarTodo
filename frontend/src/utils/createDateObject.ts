import { TrimmedDate } from './createDate.ts';

export type DateObject = {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  localeMonth: string;
};

function createDateObject(dateObject: TrimmedDate | null = null): DateObject {
  const date = dateObject
    ? new Date(dateObject.year, dateObject.month)
    : new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    localeMonth: date.toLocaleString('default', { month: 'long' }),
  };
}

export default createDateObject;
