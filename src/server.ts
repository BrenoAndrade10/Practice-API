import 'reflect-metadata';
import { app } from "./app";
import { myDataSource } from './database/Database';

(async () => {
    await myDataSource.initialize();  

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log('Server Runnig on port 3000 🚀');
    });
})();

