import React, { ReactNode } from 'react';
import classes from "./Field.module.css";

interface IFieldProps {
    className: string
    title: string
    hint: string;
    value: string | undefined
    children?: ReactNode
    handleChange: () => {}
}

const Field: React.FC<IFieldProps> = ({ className, title, hint, value, children, handleChange}) => {
    return (
        <div className={className}>
            <div className={classes.text}></div>
            <div className={classes.text2}>
                {title}
                {children}
            </div>
            <input className={classes.input} placeholder={hint} onChange={handleChange}/>
        </div>
    );
}

export default Field;