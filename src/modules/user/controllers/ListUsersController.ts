import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController{
    async handle(request: Request, response: Response):Promise<Response>{
        const userList = new ListUsersService()
        const users = await userList.execute()
        return response.json(users)
    }
}
export {ListUsersController}