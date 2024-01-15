import React, { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = props => {
  return <button className={props.className}>{props.children}</button>;
};

export default Button;
