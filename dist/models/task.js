"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
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
let Task = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _dueDate_decorators;
    let _dueDate_initializers = [];
    let _dueDate_extraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _completed_decorators;
    let _completed_initializers = [];
    let _completed_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    let _due_Date_decorators;
    let _due_Date_initializers = [];
    let _due_Date_extraInitializers = [];
    let _updatedAt_decorators;
    let _updatedAt_initializers = [];
    let _updatedAt_extraInitializers = [];
    var Task = _classThis = class {
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
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.dueDate = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _dueDate_initializers, void 0));
            this.title = (__runInitializers(this, _dueDate_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.description = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.completed = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _completed_initializers, void 0));
            this.createdAt = (__runInitializers(this, _completed_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.due_Date = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _due_Date_initializers, void 0));
            this.updatedAt = (__runInitializers(this, _due_Date_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
            __runInitializers(this, _updatedAt_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Task");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('increment')];
        _dueDate_decorators = [(0, typeorm_1.Column)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)()];
        _completed_decorators = [(0, typeorm_1.Column)({ default: false })];
        _createdAt_decorators = [(0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })];
        _due_Date_decorators = [(0, typeorm_1.Column)({ type: 'timestamp' })];
        _updatedAt_decorators = [(0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _dueDate_decorators, { kind: "field", name: "dueDate", static: false, private: false, access: { has: obj => "dueDate" in obj, get: obj => obj.dueDate, set: (obj, value) => { obj.dueDate = value; } }, metadata: _metadata }, _dueDate_initializers, _dueDate_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _completed_decorators, { kind: "field", name: "completed", static: false, private: false, access: { has: obj => "completed" in obj, get: obj => obj.completed, set: (obj, value) => { obj.completed = value; } }, metadata: _metadata }, _completed_initializers, _completed_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _due_Date_decorators, { kind: "field", name: "due_Date", static: false, private: false, access: { has: obj => "due_Date" in obj, get: obj => obj.due_Date, set: (obj, value) => { obj.due_Date = value; } }, metadata: _metadata }, _due_Date_initializers, _due_Date_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: obj => "updatedAt" in obj, get: obj => obj.updatedAt, set: (obj, value) => { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Task = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Task = _classThis;
})();
exports.Task = Task;
//# sourceMappingURL=task.js.map