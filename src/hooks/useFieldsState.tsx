
import { useState } from "react";
import {IFields} from "../components/Modals/Tasks/ModalCreateTask/ModalCreateTask"


function useFieldsState(): IFields{
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    return {name, category, description, setName, setCategory, setDescription};
}

export default useFieldsState;