import { Request, Response } from "express";
export declare function createTask(req: Request, res: Response): Promise<void>;
export declare function getTasks(req: Request, res: Response): Promise<void>;
export declare function getTaskById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function updateTask(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function completeTask(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function uncompleteTask(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function softDeleteTask(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=taskController.d.ts.map