import React from 'react';
import styles from './Cell.module.css';
import { Todo } from '../Calendar.tsx';

type CellProps = {
  date?: number;
  todos?: Todo[];
};

const Cell: React.FC<CellProps> = props => {
  const test = props.todos?.map((todo: Todo, i: number) => (
    <button className={styles[todo.color]} key={i}>
      {todo.name}
    </button>
  ));
  return (
    <td className={styles.cell}>
      <div className={styles.date}>{props.date}</div>
      <div>{test}</div>
    </td>
  );
};

export default Cell;
