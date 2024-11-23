import express from 'express';

const app : express.Application = express();
app.use(express.json());
app.disable("x-powered-by");

const PORT : string = process.env.PORT || '3000';
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));   