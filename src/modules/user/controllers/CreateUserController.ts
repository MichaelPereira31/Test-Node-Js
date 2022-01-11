import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    async handle(request: Request, response: Response): Promise<Response>{
        const {name,username,email,password,admin} = request.body
        const createUser = new CreateUserService()
        const user = await createUser.execute({
            name,
            username,
            email,
            password,
            admin
        })
        return response.json(user)
    }
}
export {CreateUserController}