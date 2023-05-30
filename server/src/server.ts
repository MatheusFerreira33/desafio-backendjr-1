import app from './app';
import {AppDataSource} from './data-source';

const port:number = 3000;
const message:string = `Server is running port:${port}`;

(async ()=>{
    
    await AppDataSource.initialize()
    .catch((err)=>{
        console.error('Error during inicialization',err);
    })

    app.listen(port,()=>{
        console.log(message)
    })
})()