import { useState } from 'react';
import { DeleteIcon } from './DeleteIcon';
import { EditIcon } from './EditIcon';
import { FolderIcon } from './FolderIcon';
import classes from './Row.module.css';

interface RowProps {
  id: number,
  name: string;
  description: string;
  onClickEdit: () => void
  onClickDelete: () => {}
}

function Row(props: RowProps) {
  return (
      <td className={classes.background}>
        <div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.category}>
            <FolderIcon className={classes.icon} />
          </div>
          <div className={classes.categoryName}></div>
          <div className={classes.edit}>
            <EditIcon className={classes.icon} onClick={props.onClickEdit}/>
          </div>
          <div className={classes.delete}>
            <DeleteIcon className={classes.icon} onClick={props.onClickDelete}/>
          </div>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.underline}></div>
    </td>
  );
}

export default Row;