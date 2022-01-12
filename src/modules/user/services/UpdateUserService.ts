import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entity/User";
import { UserRepository } from "../typeorm/repository/UserRepository";
import { hash } from 'bcryptjs'
import { AppError } from "../../../errors/AppError";
import { request } from "express";
interface IRequest {

    name: string;
    username: string;
    email: string;
    password: string;

}
class UpdateUserService {
    async execute({name, username, password, email }: IRequest): Promise<User> {
        const {user_id} = request
        console.log(user_id)
        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne(user_id)
        if (!user) {
            throw new AppError("User not found",400)
        }

        const passwordHash = await hash(password, 8)

        user.name = name
        user.username = username
        user.password = passwordHash
        user.email = email

        await userRepository.save(user)
        return user
    }
}
export { UpdateUserService }


