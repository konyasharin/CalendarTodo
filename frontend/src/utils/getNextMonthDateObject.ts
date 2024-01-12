import createDate, { TrimmedDate } from './createDate.ts';
import createDateObject from './createDateObject.ts';

function getNextMonthDateObject(date: TrimmedDate) {
  const newDate = createDate(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return createDateObject({
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
  });
}

export default getNextMonthDateObject;
