import express, { Application } from 'express';
import routes from './routes';
// import session from 'express-session'

// const isProduction = process.env.NODE_ENV === 'production'
// const secret = process.env.secret as string
// const options: session.SessionOptions = {
//   name: 'financialland',
//   secret,
//   cookie:  {
//     httpOnly: true,
//     secure: isProduction
//   }
// }

const app: Application = express();
// app.use(session(options));
app.use(express.json());

app.use('/api/v1', routes);

export default app;
// PathParams