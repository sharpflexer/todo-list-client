import React from 'react';

import classes from './Button.module.css';

interface IButtonProps {
  className: string;
  text: string;
  onAction: () => void;

}

const Button: React.FC<IButtonProps> = ({ className, text, onAction}) => {
  return (
    <button className={className} onClick={() => onAction()}>
      <div className={classes.button}></div>
      <div className={classes.text}>{text}</div>
    </button>
  );
};

export default Button;