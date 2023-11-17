import { useRef, useState } from "react";
import { Close1Icon } from "../../Close1Icon";
import { DropDownArrow1Icon } from "../../DropDownArrow1Icon";
import Field from "../../../Field/Field";
import Button from "../../../Button/Button";

interface IModalDeleteProps{
    id: number;
    name: string;
}

const ModalDeleteCategory: React.FC<IModalDeleteProps> = ({id, name}) => {   
    function deleteClick() {
        deleteCategory(id)
    }

    return (
        <div>
            <div className="modalContent"></div>
            <div className="title">Удаление категории</div>
            <label className="deleteMessage">Вы уверены, что хотите удалить категорию "{name}"?</label>
            <Button className="submit"
                    text="Да" 
                    onAction={deleteClick} />

            <Button className="cancel"
                    text="Нет" 
                    onAction={() => { }} />

            <div className="close">
                <Close1Icon className="icon" />
            </div>
        </div>
    );
}

function deleteCategory(id: number) {
    fetch('http://192.168.100.206:8089/api/ToDoList/DeleteCategory', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: {id}
        })
    });
}



export default ModalDeleteCategory;