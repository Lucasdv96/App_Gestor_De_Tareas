export declare class Task {
    id: number;
    dueDate?: Date;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    due_Date: Date;
    updatedAt: Date;
    complete(): void;
    uncompleted(): void;
    updateDetails(title: string, description: string): void;
    updateDueDate(dueDate: Date): void;
}
//# sourceMappingURL=task.d.ts.map