import React from 'react';

import resets from '../_resets.module.css';
import classes from './Button.module.css';

interface IButtonProps {
  className: string;
  text: string;
  action: () => void
}

const Button: React.FC<IButtonProps> = ({className, text, action}) => {
  return (
    <div className={className}>
      <div className={classes.button} onClick={action}></div>
      <div className={classes.text}>{text}</div>
      
    </div>
  );
};

export default Button;