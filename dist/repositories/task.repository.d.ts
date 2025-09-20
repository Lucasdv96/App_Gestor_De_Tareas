import { Task } from "../models/task";
export declare class TaskRepository {
    private readonly repository;
    constructor();
    findAll(): Promise<Task[]>;
    findById(id: number): Promise<Task | null>;
    createOne(data: {
        tittle: string;
        description: string;
        dueDate?: Date;
        priority?: "baja" | "media" | "alta";
        tags?: string[];
    }): Promise<Task>;
}
//# sourceMappingURL=task.repository.d.ts.map