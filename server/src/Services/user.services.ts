import {userResponseInterface} from '../Interfaces/user.interfaces';
import {User} from '../entities/User.entity';
import {Repository} from 'typeorm';
import {AppDataSource} from '../data-source';

export const saveDatasUserServices = async(datas:userResponseInterface[]):Promise<void>=>{

    const userRep:Repository<User> = AppDataSource.getRepository(User);

    datas.map(async (element)=>{
        const createUser = userRep.create(element);
        await userRep.save(createUser)
    })

}

export const readAllUserServices = async():Promise<User[]>=>{

    const userRep:Repository<User> = AppDataSource.getRepository(User);

    const allUSer:User[] = await userRep.find();

    return allUSer
}