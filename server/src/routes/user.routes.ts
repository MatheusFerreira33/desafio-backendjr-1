import { Router} from 'express';
import {createUserControllers,readAllUserControllers} from '../Controllers/user.controllers';
import multer from 'multer';


const multuerConfig = multer();
export const useRouter: Router = Router();


useRouter.post('',multuerConfig.single('csvFile'),createUserControllers);
useRouter.get('',readAllUserControllers)

