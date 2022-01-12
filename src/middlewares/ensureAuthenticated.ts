import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/user/typeorm/repository/UserRepository";
interface IPayload{
    sub:string;
}
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new AppError("token missing",401)
    }
    
    const [, token] = authHeader.split(" ")
    
    try {
        const {sub} = verify(token, "9e63d220b6e6fc6d028720ce077967d6") as IPayload
        const userRepository = getCustomRepository(UserRepository)
        request.user_id = sub
        const user = await userRepository.findOne(sub)
        if(!user){
            throw new AppError("user not found",401)
        }
        next()
    } catch {
        throw new AppError("invalid token",401)
    }
}