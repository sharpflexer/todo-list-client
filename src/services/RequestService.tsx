import { Category } from "../components/CategoryList/CategoryList";
import { Task } from "../components/TaskList/TaskList";
//d.ts 
class RequestService{

    private readonly domain: string;

    constructor(){
        this.domain = "http://192.168.100.229:8089/";
    }

    private async request(path: string, method: string, data?: Category | Task | number){
        return await fetch(this.domain + path, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data ? 
                JSON.stringify(data) : 
                undefined
        });
    }


    public async createCategory(name: string, description: string){     
        await this.request('api/ToDoList/AddCategory', 'POST', {id: 0, name, description});
    }
    public async readCategories(){     
        return (await this.request('api/ToDoList/GetCategories', 'GET')).json();
    }
    public async updateCategory(category: Category){     
        await this.request('api/ToDoList/UpdateCategory', 'POST', category);
    }
    public async deleteCategory(id: number){     
        await this.request('api/ToDoList/RemoveCategory', 'GET', id);
    }

    public async createTask(name: string, description: string, categoryId: number){     
        await this.request('api/ToDoList/AddTask', 'POST', {id: 0, name, description, categoryId});
    }
    public async readTasks(){     
        return (await this.request('api/ToDoList/GetTasks', 'GET')).json();
    }
    public async updateTask(task: Task){     
        await this.request('api/ToDoList/UpdateTask', 'POST', task);
    }
    public async deleteTask(id: number){     
        await this.request('api/ToDoList/RemoveTask', 'GET', id);
    }
}

const instance = new RequestService();
export {instance as RequestService};