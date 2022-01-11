import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entity/User";
import { UserRepository } from "../typeorm/repository/UserRepository";
import { hash } from 'bcryptjs'

interface IRequest {
    name: string;
    username:string;
    email: string;
    password: string;
    admin?: boolean;
}
class CreateUserService {
    async execute({ name, username,email, password, admin = false }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository)
        
        const userExist = await userRepository.findOne({email})
        
        if(userExist) {
            throw new Error("Usuário cadastrado")
        }
        const passwordHash = await hash(password, 8)
        
        const user = await userRepository.create({
            name,
            username,
            email,
            password: passwordHash,
            admin
        })
        
        await userRepository.save(user)
        
        return user
    }
}
export { CreateUserService }