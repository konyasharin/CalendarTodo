import styles from './Container.module.css';
import React, { ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
};

const Container: React.FC<ContainerProps> = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
