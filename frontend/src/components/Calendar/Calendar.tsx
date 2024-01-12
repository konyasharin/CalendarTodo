import createDateObject, { DateObject } from '../../utils/createDateObject.ts';
import styles from './Calendar.module.css';
import WeekDayBlock from './WeekDayBlock/WeekDayBlock.tsx';
import Cell from './Cell/Cell.tsx';
import { ReactNode, useState } from 'react';
import getMonthCountOfDays from '../../utils/getMonthCountOfDays.ts';
import getPrevMonthDateObject from '../../utils/getPrevMonthDateObject.ts';
import getNextMonthDateObject from '../../utils/getNextMonthDateObject.ts';

export type Todo = {
  id: number;
  name: string;
  description: string;
  year: number;
  month: number;
  date: number;
  hour: number;
  minutes: number;
  color: string;
};

const todos: Array<Todo> = [
  {
    id: 1,
    name: 'тестовое',
    description: 'Описание тестовое',
    year: 2023,
    month: 11,
    date: 11,
    hour: 12,
    minutes: 25,
    color: 'red',
  },
  {
    id: 2,
    name: 'тестовое-2',
    description: 'Описание тестовое-2',
    year: 2024,
    month: 0,
    date: 1,
    hour: 13,
    minutes: 11,
    color: 'red',
  },
];

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

function createCells(date: DateObject): ReactNode[] {
  const cells: ReactNode[] = createEmptyCells(date);
  let i: number;
  const countOfEmptyCells = cells.length;
  for (i = 0; i < getMonthCountOfDays(date.year, date.month); i++) {
    const suitableTodos: Todo[] = todos.filter(todo => {
      return (
        todo.year === date.year &&
        todo.month === date.month &&
        todo.date === i + 1
      );
    });
    cells.push(
      <Cell date={i + 1} key={countOfEmptyCells + i} todos={suitableTodos} />,
    );
  }
  return addCellsBreak(cells);
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
      <div
        onClick={() =>
          setDate(
            getNextMonthDateObject({ year: date.year, month: date.month }),
          )
        }
      >
        &gt;
      </div>
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
        <tbody>{createCells(date)}</tbody>
      </table>
    </>
  );
}

export default Calendar;
