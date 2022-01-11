import { Request, Response } from "express"
import { ShowUserService } from "../services/ShowUserService"

class ShowUserController{
    async handle(request: Request,response: Response){
        const {id} = request.params
        const userShow = new ShowUserService()
        const user = await userShow.execute({id})
        return response.json(user)
    }
}
export {ShowUserController}