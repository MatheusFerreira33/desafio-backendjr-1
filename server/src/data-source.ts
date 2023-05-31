import {DataSource,DataSourceOptions} from 'typeorm';
import path from 'path'

const settings = ():DataSourceOptions=>{

    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
    const migrationsPath: string = path.join(__dirname, "./migrations/**.{ts,js}");
  

    return{
        type:"sqlite",
        database:":memory:",
        synchronize:true,
        entities:[entitiesPath],
    };


/*
    USANDO O BANCO DE DADOS MYSQL
    Abra o terminal dentro da pasta server e coloque o seguinte comando:
    npm run typeorm migration:run -- -d ./src/data-source

    e depois: npm run dev

    return{
        type: 'mysql',
        host: 'localhost',
        port: 3306, // porta utilizado para localizar o banco
        username: 'root',
        password: '', // senha do banco de dados
        database: '' // url com endereço do banco de dados,
        synchronize: true,
        entities: [entitiesPath],
        migrations:[migrationsPath]
    };
    */
}


export const AppDataSource = new DataSource(settings());

