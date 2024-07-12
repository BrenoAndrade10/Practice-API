import express from 'express'
import { router } from './server/routes/router';
import { DependencyInjection } from './core/DependencyInjection';
import cors from 'cors';


const app = express();

DependencyInjection.init();

app.use(cors({ origin: '*' }));
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

export { app }