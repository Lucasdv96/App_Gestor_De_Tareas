import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { Task } from "../models/task";
import { updateTask } from "../controllers/taskController";

export class TaskRepository {
    private readonly repository: Repository<Task>;


    constructor() {
        this.repository = AppDataSource.getRepository(Task);
    }

    findAll(): Promise<Task[]> {
        return this.repository.find();
    }

    findById(id: number): Promise<Task | null> {
        return this.repository.findOneBy({ id });
    }

    async createOne(data: {tittle: string, description: string, dueDate?: Date, priority?: "baja" | "media" | "alta", tags?: string[]}): Promise<Task> {
        const entity = this.repository.create({
            title: data.tittle,
            description: data.description,
        });
        return this.repository.save(entity);
    }
}

    //aca hay que agregar las funciones para actualizar, completar y eliminar la tarea
