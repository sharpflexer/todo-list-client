import React, { ReactNode } from 'react';
import classes from "./Field.module.css";

interface IFieldProps {
    className: string
    title: string
    hint: string;
    value: string | undefined
    children?: ReactNode
    setValue: (value: string) => void;
}


const Field: React.FC<IFieldProps> = ({ className, title, hint, value, children, setValue}) => {
    function handleNameChange(event: { target: { value: string; }; }) {
        setValue(event.target.value);
    };
      
    return (
        <div className={className}>
            <div className={classes.text}></div>
            <div className={classes.text2}>
                {title}
                {children}
            </div>
            <input className={classes.input} placeholder={hint} value={value} onChange={handleNameChange}/>
        </div>
    );
}

export default Field;