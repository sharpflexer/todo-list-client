interface IFields {
    name: string;
    category: string;
    description: string;
    setName: (value: string) => void;
    setCategory: (value: string) => void;
    setDescription: (value: string) => void;
}

export default IFields;