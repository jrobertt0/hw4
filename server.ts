import express from 'express';
import cors from 'cors';

import methodsRouter from './routes/methods';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/methods', methodsRouter);


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})