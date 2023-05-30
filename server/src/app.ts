import express,{Application, json,Router} from 'express';
import {useRouter} from './routes/user.routes';

const app:Application = express();
app.use(express.json());



app.use('/user',useRouter)

export default app
