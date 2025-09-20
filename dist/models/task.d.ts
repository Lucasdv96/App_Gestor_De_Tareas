export declare class Task {
    id: number;
    dueDate?: Date;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    due_Date: Date;
    updatedAt: Date;
    priority: "baja" | "media" | "alta";
    tags?: string[];
    deleted: boolean;
    complete(): void;
    uncompleted(): void;
    updateDetails(title: string, description: string): void;
    updateDueDate(dueDate: Date): void;
    setPriority(priority: "baja" | "media" | "alta"): void;
    setTags(tags: string[]): void;
    softDelete(): void;
}
//# sourceMappingURL=task.d.ts.map