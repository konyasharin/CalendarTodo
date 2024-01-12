import { DateObject } from './createDateObject.ts';

export type TrimmedDate = Pick<DateObject, 'year' | 'month'>;

function createDate(date: TrimmedDate): Date {
  return new Date(date.year, date.month);
}

export default createDate;
