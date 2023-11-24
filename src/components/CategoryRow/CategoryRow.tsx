import { useState } from 'react';
import classes from './CategoryRow.module.css';

interface RowProps {
  id: number,
  name: string;
  description: string;
  onClickEdit: (id: number) => void
  onClickDelete: (id: number) => void
}

function CategoryRow(props: RowProps) {

  function clickEdit() {
    return props.onClickEdit(props.id);
  }

  function clickDelete() {
    return props.onClickDelete(props.id);
  }

  return (
    <div className={classes.background}>
      <div className={classes.header}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.actions}>
          <img className={classes.icon} src="svg/edit.svg" alt="" onClick={clickEdit}></img>
          <img className={classes.icon} src="svg/delete.svg" alt="" onClick={clickDelete}></img>
        </div>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.underline}></div>
    </div >
  );
}

export default CategoryRow;