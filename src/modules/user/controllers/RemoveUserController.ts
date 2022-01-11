import { Request, Response } from "express";

import { RemoveUserService } from "../services/RemoveUserService";

class RemoveUserController{
    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const userRemove = new RemoveUserService()
        const user = await userRemove.execute({id})
        return response.json(user)
    }
}

export {RemoveUserController}