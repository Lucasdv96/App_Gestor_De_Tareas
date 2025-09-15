"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./config/env");
function bootstrap() {
    const app = (0, app_1.createApp)();
    app.listen(env_1.env.PORT, () => {
        console.log(`Server is running on port ${env_1.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=server.js.map