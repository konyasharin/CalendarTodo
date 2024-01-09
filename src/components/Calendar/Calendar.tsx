import createCurrentDate from '../../utils/createCurrentDate.ts';
import styles from './Calendar.module.css';
import WeekDayBlock from './WeekDayBlock/WeekDayBlock.tsx';

function Calendar() {
  const date = createCurrentDate();
  return (
    <>
      <div className={styles.yearAndMonth}>
        {date.localeMonth.charAt(0).toUpperCase() + date.localeMonth.slice(1)},{' '}
        {date.year}
      </div>
      <table className={styles.calendar}>
        <thead>
          <WeekDayBlock dayOfWeekName={'Пн'} />
          <WeekDayBlock dayOfWeekName={'Вт'} />
          <WeekDayBlock dayOfWeekName={'Ср'} />
          <WeekDayBlock dayOfWeekName={'Чт'} />
          <WeekDayBlock dayOfWeekName={'Пт'} />
          <WeekDayBlock dayOfWeekName={'Сб'} />
          <WeekDayBlock dayOfWeekName={'Вск'} />
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default Calendar;
