import { useState } from 'react';
import { DeleteIcon } from './DeleteIcon';
import { EditIcon } from './EditIcon';
import { FolderIcon } from './FolderIcon';
import classes from './Row.module.css';

interface RowProps {
  id: number,
  name: string;
  description: string;
  onClickEdit: (id: number) => void
  onClickDelete: (id: number) => void
}

function Row(props: RowProps) {

  function clickEdit(){
    return props.onClickEdit(props.id);
  }

  function clickDelete(){
    return props.onClickDelete(props.id);
  }

  return (
      <td className={classes.background}>
        <div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.category}>
            <FolderIcon className={classes.icon} />
          </div>
          <div className={classes.categoryName}></div>
          <div className={classes.edit}>
            <EditIcon className={classes.icon} onClick={clickEdit}/>
          </div>
          <div className={classes.delete}>
            <DeleteIcon className={classes.icon} onClick={clickDelete}/>
          </div>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.underline}></div>
    </td>
  );
}

export default Row;