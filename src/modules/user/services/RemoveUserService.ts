import { getCustomRepository } from "typeorm"
import { AppError } from "../../../errors/AppError"
import { UserRepository } from "../typeorm/repository/UserRepository"

class RemoveUserService{
    async execute(id:any):Promise<void>{
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findOne(id)
        if(!user){
            throw new AppError(`User not found`,400)
        }
        await userRepository.remove(user)
    }
}
export {RemoveUserService}