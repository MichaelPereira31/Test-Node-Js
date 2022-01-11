import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entity/User";
import { UserRepository } from "../typeorm/repository/UserRepository";

class ShowUserService{
    async execute(id:any): Promise<User | undefined>{
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findOne(id)
        if(!user){
            throw new Error(`User not found`)
        }
        return user
    }
}

export {ShowUserService}


