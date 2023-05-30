import {DataSource,DataSourceOptions} from 'typeorm';
import path from 'path'

const settings = ():DataSourceOptions=>{

    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  
    return{
        type:"sqlite",
        database:":memory:",
        synchronize:true,
        entities:[entitiesPath],
    };
}

export const AppDataSource = new DataSource(settings());

