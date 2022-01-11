import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entity/User";
import { UserRepository } from "../typeorm/repository/UserRepository";
import { hash } from 'bcryptjs'
interface IRequest {
    id: any;
    name: string;
    username: string;
    email: string;
    password: string;

}
class UpdateUserService {
    async execute({ id, name, username, password, email }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne({ id })
        if (!user) {
            throw new Error("User not found")
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


