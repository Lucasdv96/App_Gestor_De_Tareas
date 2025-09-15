import { createApp } from "./app"; 
import { env } from "./config/env";

function bootstrap() {
    const app = createApp();
    app.listen(env.PORT, () => {
        console.log(`Server is running on port ${env.PORT}`);
    });
}

bootstrap();