import { Request, Response } from 'express';
import {Get,Controller} from 'expressydecorators';

@Controller("/")
export class LoginController{
    @Get("login")
    login(req:Request,res:Response){
        res.send({hello:"world"}) 
    }

}