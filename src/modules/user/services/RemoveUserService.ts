import { getCustomRepository } from "typeorm"
import { UserRepository } from "../typeorm/repository/UserRepository"

class RemoveUserService{
    async execute(id:any):Promise<void>{
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findOne(id)
        if(!user){
            throw new Error(`User not found`)
        }
        await userRepository.remove(user)
    }
}
export {RemoveUserService}