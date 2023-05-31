import express,{Application} from 'express';
import {useRouter} from './Routes/user.routes';
import cors from 'cors';

const app:Application = express();
app.use(express.json());


app.use(cors())
app.use('/user',useRouter)

export default app
