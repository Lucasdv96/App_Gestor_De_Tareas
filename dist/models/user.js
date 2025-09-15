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
exports.User = void 0;
const typeorm_1 = require("typeorm");
//la idea de esta clase es ir guardando los usuarios que se registren en la app y que puedan tener sus tareas asociadas 
//e ir agrendale mas cosas a medida que se nos ocurran 
//tambien pense en hacer una clase ADMIN que herede de USER que es el que pone las tasks en el panel
//admin va a tener permisos para borrar usuarios y tareas y demas
//user solo va a poder ver y modificar sus tareas y su perfil
//la tarea va a estar asociada a un ADMIN (que es el que las crea) y a uno o varios USERS (los que las van a hacer)
//hay que pensar como hacer eso
//LUCAS: Me gusta la idea de admin y user
let User = class User {
    //cambio de contraseña
    changePassword(newPassword) {
        this.password = newPassword;
    }
    //actualizacion de email
    updateEmail(newEmail) {
        this.email = newEmail;
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.js.map