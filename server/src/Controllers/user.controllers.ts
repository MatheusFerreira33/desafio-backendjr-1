import {Request,Response} from 'express';
import { Readable } from 'typeorm/platform/PlatformTools';
import { userResponseInterface} from '../Interfaces/user.interfaces';
import {saveDatasUserServices,readAllUserServices} from '../Services/user.services';
import realine from 'readline';

export const createUserControllers = async (req:Request,res:Response):Promise<Response | void>=>{

    const {file}:Request = req;
    const {buffer} = file as Express.Multer.File;
  
    const listInfoLife = new Readable();
    listInfoLife.push(buffer.toString('utf-8'));
    listInfoLife.push(null);
  
    const readLineByLine = realine.createInterface({
      input:listInfoLife
    });
  
    const array:userResponseInterface[] = [];
    
    for await(let line of readLineByLine){
      const divisorLine = line.split(',');

      array.push({
        nome:divisorLine[0],
        idade:divisorLine[1],
        cpf:divisorLine[2],
        rg:divisorLine[3],
        data_nasc:divisorLine[4],
        sexo:divisorLine[5],
        signo:divisorLine[6],
        mae:divisorLine[7],
        pai:divisorLine[8],
        email:divisorLine[9],
        senha:divisorLine[10],
        cep:divisorLine[11],
        endereco:divisorLine[12],
        numero:divisorLine[13],
        bairro:divisorLine[14],
        cidade:divisorLine[15],
        estado:divisorLine[16],
        telefone_fixo:divisorLine[17],
        celular:divisorLine[18],
        altura:divisorLine[19],
        peso:divisorLine[20],
        tipo_sanguineo:divisorLine[21],
        cor:divisorLine[22],
      })
  
    }
  
    array.splice(0,1)
    const result = saveDatasUserServices(array);

    return res.json({message:'Arquivo criado com sucesso'})
}

export const readAllUserControllers = async(req:Request,res:Response):Promise<Response>=>{

  const result = await readAllUserServices();
  return res.json(result);
}