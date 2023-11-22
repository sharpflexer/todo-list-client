interface IModalDeleteProps {
    id: number;
    name: string;
}

const ModalDeleteCategory: React.FC<IModalDeleteProps> = ({ id, name }) => {
    function deleteClick() {
        deleteCategory(id)
    }

    return (
        <div>
            <div className="modalContent"></div>
            <div className="title">Удаление категории</div>
            <label className="deleteMessage">Вы уверены, что хотите удалить категорию "{name}"?</label>
            <img className="close" src="svg/close.svg" alt="" onClick={() => { }}></img>
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
            id: { id }
        })
    });
}



export default ModalDeleteCategory;