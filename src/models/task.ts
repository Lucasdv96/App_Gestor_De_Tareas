import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//Esta es la clase tarea que va a tener los atributos basicos de una tarea
//luego se le pueden ir agregando mas cosas como prioridad, etiquetas, etc
//la tarea va a estar asociada a un ADMIN y a uno o varios USERS 
//tenemos que ver como solucionar eso, si ponerle un atributo a la tarea que sea adminId y userIds o hacer una tabla intermedia
//por ahora lo dejamos asi y despues vemos como hacer eso 
//LUCAS: Okay animal 

@Entity()
export class Task {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    dueDate?: Date;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({default: false})
    completed!: boolean;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date;

    @Column({type: 'timestamp'})
    due_Date!: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt!: Date;

    // NUEVO: prioridad de la tarea
    @Column({ default: "media" })
    priority!: "baja" | "media" | "alta";

    // NUEVO: etiquetas (tags)
    @Column("simple-array", { nullable: true })
    tags?: string[];

    // NUEVO: soft delete
    @Column({ default: false })
    deleted!: boolean;

    //este es para marcar la tarea como completada
    complete() {
        this.completed = true;
        this.updatedAt = new Date();
    }

    //este para marcar que esta pendiente
    uncompleted() {
        this.completed = false;
        this.updatedAt = new Date();
    }

    //actualiza el titulo y la descripcion de la tarea
    updateDetails(title: string, description: string){
        this.title = title;
        this.description = description;
        this.updatedAt = new Date();
    }

    //cambiar la fecha de vencimiento
    updateDueDate(dueDate: Date){
        this.due_Date = dueDate;
        this.updatedAt = new Date();
    }

    // NUEVO: cambiar prioridad
    setPriority(priority: "baja" | "media" | "alta") {
        this.priority = priority;
        this.updatedAt = new Date();
    }

    // NUEVO: actualizar etiquetas
    setTags(tags: string[]) {
        this.tags = tags;
        this.updatedAt = new Date();
    }

    // NUEVO: soft delete
    softDelete() {
        this.deleted = true;
        this.updatedAt = new Date();
    }
}