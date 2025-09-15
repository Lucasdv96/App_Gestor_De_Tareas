"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const typeorm_1 = require("typeorm");
//Esta es la clase tarea que va a tener los atributos basicos de una tarea
//luego se le pueden ir agregando mas cosas como prioridad, etiquetas, etc
//la tarea va a estar asociada a un ADMIN y a uno o varios USERS 
//tenemos que ver como solucionar eso, si ponerle un atributo a la tarea que sea adminId y userIds o hacer una tabla intermedia
//por ahora lo dejamos asi y despues vemos como hacer eso 
//LUCAS: Okay animal 
let Task = class Task {
    //este es para macar la tarea como completada (no me deja poner completed porque ya existe la propiedad)
    complete() {
        this.completed = true;
        this.updatedAt = new Date();
    }
    //este para marcar que esta pendiente(aunque empieza como pendiente pero bueno en caso de que se arrepientan qseyo)
    uncompleted() {
        this.completed = false;
        this.updatedAt = new Date();
    }
    //este actualiza el titulo y la descripcion de la tarea si es neecsario
    updateDetails(title, description) {
        this.title = title;
        this.description = description;
        this.updatedAt = new Date();
    }
    // este para cambiarle la fecha de vencimiento
    updateDueDate(dueDate) {
        this.due_Date = dueDate;
        this.updatedAt = new Date();
    }
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Task.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Task.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Task.prototype, "due_Date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
//# sourceMappingURL=task.js.map