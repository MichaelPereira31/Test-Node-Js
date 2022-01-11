import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entity/User";
import { UserRepository } from "../typeorm/repository/UserRepository";

class ListUsersService{
    async execute():Promise<User[]>{
        const userRepository = getCustomRepository(UserRepository)
        const users = await userRepository.find();
        return users
    }
}
export {ListUsersService}