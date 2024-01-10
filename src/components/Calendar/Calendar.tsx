import createDateObject, { DateObject } from '../../utils/createDateObject.ts';
import styles from './Calendar.module.css';
import WeekDayBlock from './WeekDayBlock/WeekDayBlock.tsx';
import Cell from './Cell/Cell.tsx';
import { ReactNode, useState } from 'react';
import getMonthCountOfDays from '../../utils/getMonthCountOfDays.ts';
import getPrevMonthDateObject from '../../utils/getPrevMonthDateObject.ts';

function createEmptyCells(date: DateObject): ReactNode[] {
  let i: number = 0;
  const firstDateOfMonth = new Date(date.year, date.month, 0);
  const cells: ReactNode[] = [];
  while (i < firstDateOfMonth.getDay()) {
    cells.push(<Cell key={i} />);
    i++;
  }
  return cells;
}

function createCells(date: DateObject, cells: ReactNode[]): ReactNode[] {
  let i: number;
  const countOfEmptyCells = cells.length;
  for (i = 0; i < getMonthCountOfDays(date.year, date.month); i++) {
    cells.push(<Cell date={i + 1} key={countOfEmptyCells + i} />);
  }
  return cells;
}

function addCellsBreak(cells: ReactNode[]): ReactNode[] {
  const rows: ReactNode[] = [];
  let i: number;
  for (i = 1; i <= cells.length; i++) {
    if (i % 7 === 0) {
      rows.push(<tr key={Math.floor(i / 7)}>{cells.slice(i - 7, i)}</tr>);
    }
    if (i === cells.length) {
      rows.push(
        <tr key={Math.floor(i / 7) + 1}>{cells.slice(i - (i % 7), i)}</tr>,
      );
      break;
    }
  }
  return rows;
}

function Calendar() {
  const [date, setDate] = useState(createDateObject());
  console.log(date);
  return (
    <>
      <div className={styles.yearAndMonth}>
        {date.localeMonth.charAt(0).toUpperCase() + date.localeMonth.slice(1)},{' '}
        {date.year}
      </div>
      <div
        onClick={() =>
          setDate(
            getPrevMonthDateObject({ year: date.year, month: date.month }),
          )
        }
      >
        &lt;
      </div>
      <div onClick={() => console.log('next')}>&gt;</div>
      <table className={styles.calendar}>
        <thead>
          <tr>
            <WeekDayBlock dayOfWeekName={'Пн'} />
            <WeekDayBlock dayOfWeekName={'Вт'} />
            <WeekDayBlock dayOfWeekName={'Ср'} />
            <WeekDayBlock dayOfWeekName={'Чт'} />
            <WeekDayBlock dayOfWeekName={'Пт'} />
            <WeekDayBlock dayOfWeekName={'Сб'} />
            <WeekDayBlock dayOfWeekName={'Вск'} />
          </tr>
        </thead>
        <tbody>
          {addCellsBreak(createCells(date, createEmptyCells(date)))}
        </tbody>
      </table>
    </>
  );
}

export default Calendar;
