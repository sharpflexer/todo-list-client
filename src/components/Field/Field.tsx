import React, { ReactNode } from 'react';
import classes from "./Field.module.css";

interface IFieldProps {
    className: string
    title: string
    hint: string;
    value: string | undefined
    children?: ReactNode
    isRequier?: boolean
    setValue: (value: string) => void;
}


const Field: React.FC<IFieldProps> = ({ className, title, hint, value, setValue , isRequier}) => {
    function handleNameChange(event: { target: { value: string; }; }) {
       const value = event.target.value;
        setValue(event.target.value);
    };

    function handleNameChangeW(value:string) {
        setValue(value);
    };


    return (

        <fieldset className={className + " " + classes.field}>
            <legend className={classes.title}>{title} 
                {!isRequier ? '' :  <span className={classes.redStar}>*</span> }    
            </legend>
            <input className={classes.input} placeholder={hint} value={value} onChange={(e) => handleNameChangeW(e.target.value)} />
        </fieldset>

    );
}

export default Field;