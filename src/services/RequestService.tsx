import Category from "../types/Category";
import Task from "../types/Task";


class RequestService {

    private readonly domain: string;

    constructor() {
        this.domain = "http://192.168.100.229:8089/";
    }

    private async request(path: string, method: string, data?: Category | Task | number) {
        return await fetch(this.domain + path, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data ?
                JSON.stringify(data)
                : undefined
        });
    }


    public async createCategory(category: Category) {
        await this.request('api/ToDoList/AddCategory', 'POST', category);
    }
    public async readCategories() {
        return (await this.request('api/ToDoList/GetCategories', 'GET')).json();
    }
    public async updateCategory(category: Category) {
        await this.request('api/ToDoList/UpdateCategory', 'POST', category);
    }
    public async deleteCategory(id: number) {
        await this.request('api/ToDoList/RemoveCategory/' + id, 'GET');
    }

    public async createTask(task: Task) {
        await this.request('api/ToDoList/AddTask', 'POST', task);
    }
    public async readTasks() {
        return (await this.request('api/ToDoList/GetTasks', 'GET')).json();
    }
    public async updateTask(task: Task) {
        await this.request('api/ToDoList/UpdateTask', 'POST', task);
    }
    public async deleteTask(id: number) {
        await this.request('api/ToDoList/RemoveTask/' + id, 'GET');
    }
}

const instance = new RequestService();
export { instance as RequestService };