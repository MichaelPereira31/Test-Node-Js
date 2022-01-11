import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {email, password} = request.body
        const authenticationUser = new AuthenticateUserService()
        const token = await authenticationUser.execute({
            email,
            password
        })
        return response.json(token)
    }
}
export {AuthenticateController}