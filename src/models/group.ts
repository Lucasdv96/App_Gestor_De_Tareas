import { Entity,PrimaryGeneratedColumn, Column } from "typeorm";

//ACA ESTOY CREANDO LOS GRUPOS YA QUE ES PARTE DE LO QUE PIDE EL PROFESOR

@Entity()
export class Group {
    @PrimaryGeneratedColumn('increment')
    id!: number;
    @Column()
    name!: string;
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date;
}

//un grupo va a tener varios usuarios y varias tareas
//hay que pensar como hacer eso
//un usuario puede estar en varios grupos
//una tarea puede estar en varios grupos