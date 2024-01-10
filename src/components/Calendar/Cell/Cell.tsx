import React from 'react';
import styles from './Cell.module.css';

type CellProps = {
  date?: number;
};

const Cell: React.FC<CellProps> = props => {
  return (
    <td className={styles.cell}>
      <div className={styles.date}>{props.date}</div>
      <div></div>
    </td>
  );
};

export default Cell;
