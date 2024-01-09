import React from 'react';
import styles from './WeekDayBlock.module.css';

type WeekDayProps = {
  dayOfWeekName: string;
};

const WeekDayBlock: React.FC<WeekDayProps> = props => {
  return <td className={styles.block}>{props.dayOfWeekName}</td>;
};

export default WeekDayBlock;
