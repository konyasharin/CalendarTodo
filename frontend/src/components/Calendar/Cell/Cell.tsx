import React from 'react';
import styles from './Cell.module.css';
import { Todo } from '../Calendar.tsx';
import { Link } from 'react-router-dom';

type CellProps = {
  date?: number;
  todos?: Todo[];
};

const Cell: React.FC<CellProps> = props => {
  const buttons = props.todos?.map((todo: Todo, i: number) => (
    <Link to={`/todos/${todo.id}`} className={styles[todo.color]} key={i}>
      {todo.name}
    </Link>
  ));
  return (
    <td className={styles.cell}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.buttons}>{buttons}</div>
    </td>
  );
};

export default Cell;
