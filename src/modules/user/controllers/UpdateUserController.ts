import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController{
    async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params;
        const {name, username,email, password} = request.body
        const UserUpdate = new UpdateUserService();
        const user = await UserUpdate.execute({
            id,
            name,
            username,
            email,
            password
        })
        return response.json(user);
    }
}
export {UpdateUserController}