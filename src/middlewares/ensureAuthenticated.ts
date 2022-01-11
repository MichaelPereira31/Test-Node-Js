import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../modules/user/typeorm/repository/UserRepository";
interface IPayload{
    sub:string;
}
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new Error("token missing")
    }

    const [, token] = authHeader.split(" ")
    try {
        const {sub:user_id} = verify(token, "9e63d220b6e6fc6d028720ce077967d6") as IPayload
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findOne(user_id)
        if(!user){
            throw new Error("user not found")
        }
        next()
    } catch {
        throw new Error("invalid token")
    }
}