"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    return app;
}
//const express = require('express');
app.get('/', (req, res) => {
    res.send('Hello World!');
    res.send('Hola Mundo');
    res.send('Bonjour le monde');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log('Servidor ejecutándose en http://localhost:3000');
});
//# sourceMappingURL=app.js.map