import { getCustomRepository } from "typeorm";
import { AppError } from "../../../errors/AppError";
import { User } from "../typeorm/entity/User";
import { UserRepository } from "../typeorm/repository/UserRepository";

class ShowUserService{
    async execute(id:any): Promise<User | undefined>{
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findOne(id)
        if(!user){
            throw new AppError(`User not found`,400)
        }
        return user
    }
}

export {ShowUserService}


