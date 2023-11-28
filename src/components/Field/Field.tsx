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


const Field: React.FC<IFieldProps> = ({ className, title, hint, value, setValue }) => {
    function handleNameChange(event: { target: { value: string; }; }) {
        setValue(event.target.value);
    };

    return (

        <fieldset className={className + " " + classes.field}>
            <legend className={classes.title}>{title}</legend>
            <input className={classes.input} placeholder={hint} value={value} onChange={handleNameChange} />
        </fieldset>

    );
}

export default Field;