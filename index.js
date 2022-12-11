import express from 'express';
import bodyParser from 'body-parser';

import usersRouters from './routes/users.js';

const app = express();
const PORT = 5000;

app.use (bodyParser.json());

app.use('/users', usersRouters);

app.get('/', (req, res )=> {

    console.log('hello');
    res.send("yes ");
})

app.listen ( PORT,()=> console.log (`server running on port : http://localhost:${PORT}`))