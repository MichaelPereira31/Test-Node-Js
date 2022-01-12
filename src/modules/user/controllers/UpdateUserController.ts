import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController{
    async handle(request:Request, response:Response):Promise<Response>{
        
        const {name, username,email, password} = request.body
        const UserUpdate = new UpdateUserService();
        const user = await UserUpdate.execute({
            name,
            username,
            email,
            password
        })
        return response.json(user);
    }
}
export {UpdateUserController}