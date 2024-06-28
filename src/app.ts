import express from 'express'
import { router } from './server/routes/router';
import { DependencyInjection } from './core/DependencyInjection';


const app = express();

DependencyInjection.init();
app.use(express.json());
app.use(router)

export { app }