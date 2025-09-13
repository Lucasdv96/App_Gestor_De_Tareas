import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//la idea de esta clase es ir guardando los usuarios que se registren en la app y que puedan tener sus tareas asociadas 
//e ir agrendale mas cosas a medida que se nos ocurran 
//tambien pense en hacer una clase ADMIN que herede de USER que es el que pone las tasks en el panel
//admin va a tener permisos para borrar usuarios y tareas y demas
//user solo va a poder ver y modificar sus tareas y su perfil
//la tarea va a estar asociada a un ADMIN (que es el que las crea) y a uno o varios USERS (los que las van a hacer)
//hay que pensar como hacer eso


@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt!: Date;

    //cambio de contraseña
    changePassword(newPassword: string) {
        this.password = newPassword;
    }

    //actualizacion de email
    updateEmail(newEmail: string) {
        this.email = newEmail;
    }

}
