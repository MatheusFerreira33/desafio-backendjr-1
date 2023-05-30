import {Router} from 'express';
import {createUserControllers} from '../Controllers/user.controllers'

export const useRouter:Router = Router();

useRouter.post('',createUserControllers);


