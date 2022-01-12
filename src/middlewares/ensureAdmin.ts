import { NextFunction, Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../modules/user/typeorm/repository/UserRepository"

export async function ensureAdmin(request:Request,response:Response,next:NextFunction){
    const {user_id} = request
    
    const userRepository = getCustomRepository(UserRepository)
    
    const {admin} = await userRepository.findOne(user_id)

    if(admin){
        
        return next()
    }

    return response.status(401).json({
        error:"Unauthorized",
    });
}