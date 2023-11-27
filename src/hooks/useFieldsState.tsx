
import { useState } from "react";
import IFields from "../interfaces/IFields";


function useFieldsState(): IFields{
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    return {name, category, description, setName, setCategory, setDescription};
}

export default useFieldsState;