import React, { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
