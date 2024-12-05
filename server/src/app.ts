import express, { Application } from 'express';
import routes from './routes';
import cors  from 'cors'
const app: Application = express();

app.use(cors())
app.use(express.json());

app.use('/api/v1', routes);

export default app;
