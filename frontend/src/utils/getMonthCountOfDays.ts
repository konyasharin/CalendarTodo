function getMonthCountOfDays(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export default getMonthCountOfDays;
