import useFieldsState from "../../../../hooks/useFieldsState";
import IModalW from "../../../../interfaces/IModalContent";
import Task from "../../../../types/Task";
import Field from "../../../Field/Field";
import Modal from "../../Modal/Modal";
import fields from "../../fields.module.css";

const ModalCreateTask = ({ active, setActive, loadItem }: IModalW<Task>) => {
    const { name, category, description, setName, setCategory, setDescription } = useFieldsState();

    function createClick() {
        const task: Task = {
            id: 0,
            name,
            description,
            categoryId: Number(category)
        }
        loadItem(task);
    }
    return (
        <Modal title="Создание задачи"
            submitName="Создать"
            cancelName="Закрыть"
            active={active}
            setActive={setActive}
            submitClick={createClick}>
            <div className={fields.topLayer}>
                <Field className={fields.name}
                    title="Имя"
                    hint="Введите название задачи"
                    value={name}
                    setValue={setName}>
                    <div className="redStar">*</div>
                </Field>

                <Field className={fields.category}
                    title="Категория"
                    hint="Выберите категорию"
                    value={category}
                    setValue={setCategory} />
            </div>
            <Field className={fields.description}
                title="Описание"
                hint="Введите описание задачи"
                value={description}
                setValue={setDescription} />
        </Modal>
    );
}

export default ModalCreateTask;